import { readFile, writeFile, cp, mkdir } from 'node:fs/promises'
import { dirname, relative, resolve } from 'node:path'
import { homeData, loadLibrary, pageData, walk } from './book'
import { renderPage } from './render'

const library = await loadLibrary()
const template = await readFile('dist/index.html', 'utf8')
await writeFile('dist/index.html', renderPage(template, homeData(library)))
for (const course of library) {
  for (const item of course.items) {
    await writeFile(`dist/${item.slug}.html`, renderPage(template, pageData(course, item)))
    if (item.kind === 'note' && item.warnings.length) console.warn(`${item.fileName}:\n${item.warnings.join('\n')}`)
  }
  if (!course.config.notesDirectory) continue
  const root = resolve(course.config.notesDirectory)
  // Only attachments are public assets; Markdown is compiled into HTML.
  for (const file of (await walk(root)).filter(file => !/\.md$/i.test(file))) {
    const destination = resolve('dist/source', course.config.id, relative(root, file))
    await mkdir(dirname(destination), { recursive: true })
    await cp(file, destination)
  }
}
await writeFile('dist/.nojekyll', '')
const notes = library.flatMap(course => course.notes)
console.log(`已导出 ${library.length} 门课、${notes.length} 篇笔记、${library.reduce((n, course) => n + course.resources.length, 0)} 个网页资源、${notes.reduce((n, note) => n + note.equationCount, 0)} 个块级公式 → dist/`)
