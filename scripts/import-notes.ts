import { cp, mkdir, readFile } from 'node:fs/promises'
import { resolve, relative, dirname } from 'node:path'
import { isNote, walk } from './book'
import { siteConfig } from '../site.config'

const args = process.argv.slice(2)
const courseFlag = args.indexOf('--course')
const courseId = courseFlag < 0 ? siteConfig.courses[0].id : args.splice(courseFlag, 2)[1]
const course = siteConfig.courses.find(course => course.id === courseId)
if (!course) throw new Error(`课程不存在：${courseId}。请先在 site.config.ts 中配置课程。`)
if (!course.notesDirectory) throw new Error(`课程未配置 notesDirectory：${courseId}。请先设置笔记目录。`)
const argument = args.find(value => !value.startsWith('--'))
if (!argument) throw new Error('用法：npm run import:notes -- /笔记目录 [--course 课程id] [--overwrite]')
const source = resolve(argument)
const destination = resolve(course.notesDirectory)
if (source === destination || destination.startsWith(source + '/')) throw new Error('导入目录不能包含目标目录')
const overwrite = process.argv.includes('--overwrite')
const files = (await walk(source)).filter(file => isNote(file) || /\.(png|jpe?g|gif|webp|svg)$/i.test(file))
if (!files.some(file => /\.md$/i.test(file))) throw new Error('该目录没有 Markdown 文件')
// Check every conflict before copying so a failed import never leaves a partial book.
const pending: { from: string; to: string }[] = []
for (const file of files) {
  const target = resolve(destination, relative(source, file))
  const incoming = await readFile(file)
  const existing = await readFile(target).catch((error: NodeJS.ErrnoException) => { if (error.code === 'ENOENT') return null; throw error })
  if (existing?.equals(incoming)) continue
  if (existing && !overwrite) throw new Error(`文件已存在且内容不同：${relative(destination, target)}。需要替换时请添加 --overwrite。`)
  pending.push({ from: file, to: target })
}
for (const { from, to } of pending) {
  await mkdir(dirname(to), { recursive: true })
  await cp(from, to)
}
console.log(`导入完成：${pending.length} 个文件 → ${course.notesDirectory}；源目录未修改。`)
