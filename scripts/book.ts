import { readdir, readFile } from 'node:fs/promises'
import { resolve, relative, extname, basename, dirname } from 'node:path'
import matter from 'gray-matter'
import GithubSlugger from 'github-slugger'
import { siteConfig } from '../site.config'
import { compileMarkdown } from './markdown'
import type { ContentItem, ContentSummary, Course, CourseConfig, CourseSummary, HomeData, Note, NoteSummary, PageData, ResourceSummary } from '../src/types'

export async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const groups = await Promise.all(entries.filter(entry => !entry.name.startsWith('.') && !entry.isSymbolicLink()).map(async entry => {
    const path = resolve(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  }))
  return groups.flat()
}

export const isNote = (file: string) => /\.md$/i.test(file) && !/^(AGENTS|CLAUDE|SKILL)\.md$/i.test(basename(file))
const portable = (path: string) => path.split('\\').join('/')
function validateUrl(value: string, label: string) {
  let url: URL
  try { url = new URL(value) } catch { throw new Error(`${label} URL 无效`) }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error(`${label} URL 必须是无账号密码的 HTTP(S) 地址`)
}

async function loadBook(config: CourseConfig): Promise<Note[]> {
  if (!config.notesDirectory) return []
  const directory = resolve(config.notesDirectory)
  const allFiles = await walk(directory)
  const files = allFiles.filter(file => isNote(file) && !config.exclude?.includes(portable(relative(directory, file)))).sort((a, b) => {
    const aOrder = config.entries?.[portable(relative(directory, a))]?.order ?? 0
    const bOrder = config.entries?.[portable(relative(directory, b))]?.order ?? 0
    return aOrder - bOrder || a.localeCompare(b, 'zh-CN', { numeric: true })
  })
  const slugs = new GithubSlugger()
  const sources = await Promise.all(files.map(async (file, index) => {
    const fileName = portable(relative(directory, file))
    const base = fileName.slice(0, -extname(fileName).length)
    const parsed = matter(await readFile(file, 'utf8'))
    const entry = config.entries?.[fileName]
    if (entry?.sourceUrl) validateUrl(entry.sourceUrl, `${fileName} 原始链接`)
    const section = base.match(/(?:^|\/)Section[_\s-]*([\d.]+)[_\s-]*(.*)$/i)
    const number = String(parsed.data.number || entry?.number || section?.[1] || index + 1)
    const heading = parsed.content.match(/^#\s+(.+)$/m)?.[1]
    const title = String(parsed.data.title || entry?.title || heading || (section?.[2] || base).replace(/_/g, ' '))
    const localSlug = slugs.slug(String(parsed.data.slug || (section ? `section-${number.replaceAll('.', '-')}` : base.replaceAll('/', '-'))))
    const slug = config.routePrefix + localSlug
    const summary = { kind: 'note' as const, slug, number, chapter: String(parsed.data.chapter || entry?.chapter || number.split('.')[0]), title, fileName, href: `./${slug}.html`, resourceIds: entry?.resources ?? [], sourceUrl: entry?.sourceUrl }
    const content = heading ? parsed.content.replace(/^#\s+.+\r?\n?/m, '') : parsed.content
    return { summary, content }
  }))
  return Promise.all(sources.map(async ({ summary, content }) => {
    const from = dirname(resolve(directory, summary.fileName))
    const links = new Map(sources.map(source => [portable(relative(from, resolve(directory, source.summary.fileName))), source.summary.href]))
    for (const file of allFiles.filter(file => !/\.md$/i.test(file))) {
      const assetPath = portable(relative(directory, file))
      const href = `./source/${config.id}/${assetPath.split('/').map(encodeURIComponent).join('/')}`
      links.set(portable(relative(from, file)), href)
      links.set(`asset:${basename(file)}`, href)
    }
    return { ...summary, ...await compileMarkdown(content, links) }
  }))
}

export async function loadCourse(config: CourseConfig): Promise<Course> {
  if (!/^[a-z0-9-]+$/.test(config.id)) throw new Error(`课程 id 无效：${config.id}`)
  const resourceIds = new Set<string>()
  const resources: ResourceSummary[] = (config.resources ?? []).map(resource => {
    if (!/^[a-z0-9-]+$/.test(resource.id) || resourceIds.has(resource.id)) throw new Error(`资源 id 无效或重复：${resource.id}`)
    resourceIds.add(resource.id)
    validateUrl(resource.url, `资源 ${resource.id}`)
    const slug = config.routePrefix + 'resource-' + resource.id
    return { kind: 'resource', id: resource.id, slug, title: resource.title, chapter: resource.chapter ?? 'resources', href: `./${slug}.html`, url: resource.url }
  })
  const notes = await loadBook(config)
  for (const note of notes) {
    for (const id of note.resourceIds) {
      if (!resourceIds.has(id)) throw new Error(`${note.fileName} 关联了不存在的资源：${id}`)
    }
  }
  const entries: ContentItem[] = [...notes, ...resources]
  if (!entries.length) throw new Error(`课程没有笔记或网页资源：${config.id}`)
  const chapters = [...new Set([...Object.keys(config.chapters), ...entries.map(item => item.chapter)])]
  chapters.sort((a, b) => {
    const aNumeric = /^\d+(?:\.\d+)?$/.test(a), bNumeric = /^\d+(?:\.\d+)?$/.test(b)
    if (aNumeric && bNumeric) return Number(a) - Number(b)
    return Number(bNumeric) - Number(aNumeric)
  })
  const items = chapters.flatMap(chapter => entries.filter(item => item.chapter === chapter))
  return { config, notes, resources, items }
}

export async function loadLibrary(): Promise<Course[]> {
  const courses = await Promise.all(siteConfig.courses.map(loadCourse))
  const routes = new Set<string>()
  for (const course of courses) {
    for (const item of course.items) {
      if (!item.slug || item.slug === 'index' || item.slug === '404' || /[/.\\]/.test(item.slug)) throw new Error(`网页地址无效或保留：${item.slug}`)
      if (routes.has(item.slug)) throw new Error(`网页地址重复：${item.slug}。请设置不同的 routePrefix。`)
      routes.add(item.slug)
    }
  }
  return courses
}

export function courseSummaries(library: Course[]): CourseSummary[] {
  return library.map(({ config, notes, resources, items }) => ({
    id: config.id, title: config.title, href: items[0].href, noteCount: notes.length, resourceCount: resources.length,
    topics: [...new Set(items.map(item => config.chapters[item.chapter] || (item.chapter === 'resources' ? '代码与资源' : item.title)))],
  }))
}

export function homeData(library: Course[]): HomeData {
  return { kind: 'home', title: siteConfig.title, courses: courseSummaries(library) }
}

const noteSummary = ({ slug, title, number, chapter, href }: Note): NoteSummary => ({ kind: 'note', slug, title, number, chapter, href })
const contentSummary = (item: ContentItem): ContentSummary => item.kind === 'note' ? noteSummary(item) : item

export function pageData(course: Course, item: ContentItem): PageData {
  return {
    kind: 'content', site: { bookTitle: course.config.title, chapters: course.config.chapters },
    items: course.items.map(contentSummary),
    entry: item.kind === 'note'
      ? { ...noteSummary(item), html: item.html, sourceUrl: item.sourceUrl, resources: course.resources.filter(resource => item.resourceIds.includes(resource.id)) }
      : { ...item, notes: course.notes.filter(note => note.resourceIds.includes(item.id)).map(noteSummary) },
  }
}
