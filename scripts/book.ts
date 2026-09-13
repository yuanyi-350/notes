import { readdir, readFile } from 'node:fs/promises'
import { resolve, relative, extname, basename, dirname } from 'node:path'
import matter from 'gray-matter'
import GithubSlugger from 'github-slugger'
import { siteConfig } from '../site.config'
import { compileMarkdown } from './markdown'
import type { Course, CourseConfig, CourseSummary, HomeData, Note, NoteSummary, PageData } from '../src/types'

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

export async function loadBook(config: CourseConfig = siteConfig.courses[0]): Promise<Note[]> {
  const directory = resolve(config.notesDirectory)
  const allFiles = await walk(directory)
  const files = allFiles.filter(file => isNote(file) && !config.exclude?.includes(portable(relative(directory, file)))).sort((a, b) => {
    const aOrder = config.entries?.[portable(relative(directory, a))]?.order ?? 0
    const bOrder = config.entries?.[portable(relative(directory, b))]?.order ?? 0
    return aOrder - bOrder || a.localeCompare(b, 'zh-CN', { numeric: true })
  })
  if (!files.length) throw new Error(`未找到 Markdown 笔记，请将 .md 文件放入 ${config.notesDirectory}`)
  const slugs = new GithubSlugger()
  const sources = await Promise.all(files.map(async (file, index) => {
    const fileName = portable(relative(directory, file))
    const base = fileName.slice(0, -extname(fileName).length)
    const parsed = matter(await readFile(file, 'utf8'))
    const entry = config.entries?.[fileName]
    const section = base.match(/(?:^|\/)Section([\d.]+)[_\s-]*(.*)$/i)
    const number = String(parsed.data.number || entry?.number || section?.[1] || index + 1)
    const heading = parsed.content.match(/^#\s+(.+)$/m)?.[1]
    const title = String(parsed.data.title || entry?.title || heading || (section?.[2] || base).replace(/_/g, ' '))
    const localSlug = slugs.slug(String(parsed.data.slug || (section ? `section-${number.replaceAll('.', '-')}` : base.replaceAll('/', '-'))))
    const slug = config.routePrefix + localSlug
    if (!slug || slug === 'index' || slug === '404' || /[/.\\]/.test(slug)) throw new Error(`笔记的 slug 无效或保留：${fileName}`)
    const summary: NoteSummary = { slug, number, chapter: String(parsed.data.chapter || entry?.chapter || number.split('.')[0]), title, fileName, href: `./${slug}.html` }
    const content = heading ? parsed.content.replace(/^#\s+.+\r?\n?/m, '') : parsed.content
    return { summary, content }
  }))
  return Promise.all(sources.map(async ({ summary, content }) => {
    const from = dirname(resolve(directory, summary.fileName))
    const links = new Map(sources.map(source => [portable(relative(from, resolve(directory, source.summary.fileName))), source.summary.href]))
    for (const [oldName, newName] of Object.entries(config.aliases || {})) {
      const target = sources.find(source => source.summary.fileName === newName)
      if (target) links.set(portable(relative(from, resolve(directory, oldName))), target.summary.href)
    }
    for (const file of allFiles.filter(file => !/\.md$/i.test(file))) {
      const assetPath = portable(relative(directory, file))
      const href = `./source/${config.id}/${assetPath.split('/').map(encodeURIComponent).join('/')}`
      links.set(portable(relative(from, file)), href)
      links.set(`asset:${basename(file)}`, href)
    }
    return { ...summary, ...await compileMarkdown(content, summary.number, links) }
  }))
}

export async function loadLibrary(): Promise<Course[]> {
  const courses = await Promise.all(siteConfig.courses.map(async config => ({ config, notes: await loadBook(config) })))
  const routes = new Set<string>()
  for (const course of courses) {
    if (!/^[a-z0-9-]+$/.test(course.config.id)) throw new Error(`课程 id 无效：${course.config.id}`)
    for (const note of course.notes) {
      if (routes.has(note.slug)) throw new Error(`不同课程的网页地址重复：${note.slug}。请设置不同的 routePrefix。`)
      routes.add(note.slug)
    }
  }
  return courses
}

export function courseSummaries(library: Course[]): CourseSummary[] {
  return library.map(({ config, notes }) => ({
    id: config.id, title: config.title, href: notes[0].href, noteCount: notes.length,
    topics: [...new Set(notes.filter(note => /^\d/.test(note.number)).map(note => config.chapters[note.chapter] || note.title))],
  }))
}

export function homeData(library: Course[]): HomeData {
  return { kind: 'home', title: siteConfig.title, courses: courseSummaries(library) }
}

export function pageData(library: Course[], course: Course, note: Note): PageData {
  return {
    kind: 'note', site: { title: siteConfig.title, bookTitle: course.config.title, chapters: course.config.chapters },
    courseId: course.config.id, courses: courseSummaries(library),
    notes: course.notes.map(({ html: _html, equationCount: _eq, warnings: _warnings, ...summary }) => summary), note,
  }
}
