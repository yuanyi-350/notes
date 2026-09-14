import { renderToString } from 'react-dom/server'
import { Site } from '../src/Site'
import { homeData, loadLibrary, pageData } from './book'
import type { SitePageData } from '../src/types'

const escapeHtml = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
export function renderPage(template: string, data: SitePageData) {
  const title = data.kind === 'home' ? data.title : `${data.note.title} · ${data.site.bookTitle}`
  const description = data.kind === 'home' ? data.courses.map(course => course.title).join('、') : `${data.site.bookTitle} · ${data.note.title}`
  return template.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, (_, start, end) => start + escapeHtml(description) + end)
    .replace('<!--app-html-->', () => renderToString(<Site data={data} />))
    .replace('"__PAGE_DATA__"', () => JSON.stringify(data).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'))
}

let cached: ReturnType<typeof loadLibrary> | undefined
export function invalidateBook() { cached = undefined }
export async function renderRequest(template: string, url: string) {
  const library = await (cached ??= loadLibrary())
  const requested = decodeURIComponent(url.split('?')[0]).replace(/^\//, '').replace(/\.html$/, '')
  if (requested === '' || requested === 'index') return renderPage(template, homeData(library))
  for (const course of library) {
    const note = course.notes.find(note => note.slug === requested)
    if (note) return renderPage(template, pageData(course, note))
  }
  return null
}
