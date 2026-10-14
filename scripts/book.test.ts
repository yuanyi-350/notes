import assert from 'node:assert/strict'
import { test } from 'node:test'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { courseSummaries, loadCourse, pageData } from './book'
import { compileMarkdown } from './markdown'
import { renderPage } from './render'
import type { CourseConfig } from '../src/types'

const resource = { id: 'code', title: 'Course Code', url: 'https://github.com/user/repository', chapter: 'rl' }
const config: CourseConfig = { id: 'test', title: '测试课程', routePrefix: 'test-', chapters: { rl: '强化学习' }, resources: [resource] }

test('只有网页资源的课程可以生成首页入口与独立页面', async () => {
  const course = await loadCourse(config)
  const summary = courseSummaries([course])[0]
  assert.equal(summary.noteCount, 0)
  assert.equal(summary.resourceCount, 1)
  assert.equal(summary.href, './test-resource-code.html')
  const data = pageData(course, course.resources[0])
  assert.equal(data.entry.kind, 'resource')
  if (data.entry.kind !== 'resource') return
  assert.deepEqual(data.entry.notes, [])
  const html = renderPage('<title></title><!--app-html-->"__PAGE_DATA__"', data)
  assert.match(html, /class="resource-url" href="https:\/\/github.com\/user\/repository" target="_blank"/)
  assert.doesNotMatch(html, /id="related-notes-title"/)
})

test('多篇笔记共用仓库，原始讲义与反向关联均保留，源文件不变', async context => {
  const directory = await mkdtemp(join(tmpdir(), 'course-notes-'))
  context.after(() => rm(directory, { recursive: true, force: true }))
  const source = '# Policy Gradients\n\n正文。\n'
  await writeFile(join(directory, 'section-3.md'), source)
  await writeFile(join(directory, 'section-5.md'), '# Advanced Policy Gradients\n\n正文。\n')
  const course = await loadCourse({
    ...config, notesDirectory: directory,
    entries: {
      'section-3.md': { number: '1', chapter: 'rl', resources: ['code'], sourceUrl: 'https://example.com/section-3.pdf' },
      'section-5.md': { number: '2', chapter: 'rl', resources: ['code'] },
    },
  })
  assert.deepEqual(course.items.map(item => item.kind), ['note', 'note', 'resource'])
  assert.deepEqual(course.notes.map(note => note.number), ['1', '2'])
  const noteData = pageData(course, course.notes[0])
  assert.equal(noteData.entry.kind, 'note')
  if (noteData.entry.kind !== 'note') return
  assert.equal(noteData.entry.sourceUrl, 'https://example.com/section-3.pdf')
  assert.equal(noteData.entry.resources[0].id, 'code')
  const resourceData = pageData(course, course.resources[0])
  assert.equal(resourceData.entry.kind, 'resource')
  if (resourceData.entry.kind !== 'resource') return
  assert.deepEqual(resourceData.entry.notes.map(note => note.number), ['1', '2'])
  const html = renderPage('<title></title><!--app-html-->"__PAGE_DATA__"', noteData)
  assert.match(html, /href="https:\/\/example.com\/section-3.pdf" target="_blank" rel="noopener noreferrer"/)
  assert.equal(await readFile(join(directory, 'section-3.md'), 'utf8'), source)
})

test('缺失的资源关联与不安全的原始链接会阻止构建', async context => {
  const directory = await mkdtemp(join(tmpdir(), 'course-notes-'))
  context.after(() => rm(directory, { recursive: true, force: true }))
  await writeFile(join(directory, 'section-1.md'), '# Note\n')
  await assert.rejects(loadCourse({ ...config, notesDirectory: directory, entries: { 'section-1.md': { resources: ['missing'] } } }), /不存在的资源/)
  await assert.rejects(loadCourse({ ...config, notesDirectory: directory, entries: { 'section-1.md': { sourceUrl: 'javascript:alert(1)' } } }), /HTTP\(S\)/)
})

test('无效网页地址、重复资源 id 和空课程会阻止构建', async () => {
  await assert.rejects(loadCourse({ ...config, resources: [{ ...resource, url: 'javascript:alert(1)' }] }), /HTTP\(S\)/)
  await assert.rejects(loadCourse({ ...config, resources: [{ ...resource, url: 'invalid' }] }), /URL 无效/)
  await assert.rejects(loadCourse({ ...config, resources: [resource, resource] }), /重复/)
  await assert.rejects(loadCourse({ ...config, resources: [] }), /没有笔记或网页资源/)
})

test('数字章节包含 0 时保持阅读顺序', async context => {
  const directory = await mkdtemp(join(tmpdir(), 'course-notes-'))
  context.after(() => rm(directory, { recursive: true, force: true }))
  await writeFile(join(directory, 'Section0.md'), '# Introduction\n')
  await writeFile(join(directory, 'Section1.md'), '# First Chapter\n')
  const course = await loadCourse({ ...config, chapters: { '1': '第一章' }, notesDirectory: directory, resources: [] })
  assert.deepEqual(course.items.map(item => item.chapter), ['0', '1'])
})

test('兼容导入笔记的竖线定界符，代码示例保持原样', async () => {
  const result = await compileMarkdown('$$\nE\\left[Q \\Big{|} s\\right]\n$$\n\n`\\Big{|}`', new Map())
  assert.deepEqual(result.warnings, [])
  assert.doesNotMatch(result.html, /katex-error/)
  assert.match(result.html, /<code>\\Big\{\|\}<\/code>/)
})
