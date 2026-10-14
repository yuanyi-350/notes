import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { toText } from 'hast-util-to-text'
import GithubSlugger from 'github-slugger'
import type { Root as MdRoot, Paragraph } from 'mdast'
import type { Root as HtmlRoot, Element } from 'hast'
import { normalizeMathDelimiters } from './math-delimiters'

export async function compileMarkdown(source: string, links: Map<string, string>) {
  const normalized = normalizeMathDelimiters(source)
  let equationCount = 0
  const slugger = new GithubSlugger()

  const rewriteUrl = (url: string) => {
    const [path, hash] = url.split('#')
    let decoded = path
    try { decoded = decodeURIComponent(path) } catch { /* Preserve malformed URLs for editing. */ }
    let target = links.get(decoded.replace(/^\.\//, ''))
    // Typora may store an absolute path to an image. Its imported counterpart
    // is resolved by filename within this course, so the site remains portable.
    if (!target && decoded.startsWith('/')) target = links.get(`asset:${decoded.split('/').at(-1)}`)
    return target ? target + (hash ? `#${hash}` : '') : url
  }

  function markdownCompatibility() {
    return (tree: MdRoot) => {
      visit(tree, 'html', node => {
        node.value = node.value.replace(/<font\s+[^>]*>/gi, '<span class="note-emphasis">').replace(/<\/font>/gi, '</span>')
      })
      // Typora accepts bold labels with trailing spaces or punctuation directly
      // before Chinese text. Recover unresolved ** pairs in literal text nodes;
      // parsed code, math, existing emphasis and escaped asterisks stay intact.
      visit(tree, 'paragraph', node => {
        node.children = node.children.flatMap(child => {
          const start = child.position?.start.offset, end = child.position?.end.offset
          if (child.type !== 'text' || start === undefined || end === undefined || normalized.slice(start, end).replace(/\r\n/g, '\n') !== child.value) return [child]
          const children: Paragraph['children'] = []
          let offset = 0
          for (const match of child.value.matchAll(/(?<!\*)\*\*(?!\*)([^*\r\n]+?)\*\*(?!\*)/g)) {
            if (!match[1].trim()) continue
            if (match.index > offset) children.push({ type: 'text', value: child.value.slice(offset, match.index) })
            children.push({ type: 'strong', children: [{ type: 'text', value: match[1].trim() }] })
            offset = match.index + match[0].length
          }
          if (offset < child.value.length) children.push({ type: 'text', value: child.value.slice(offset) })
          return children
        })
      })
      visit(tree, 'math', () => { equationCount++ })
      visit(tree, node => {
        if (node.type === 'link' || node.type === 'image') node.url = rewriteUrl(node.url)
      })
    }
  }

  function typoraImages() {
    return (tree: HtmlRoot) => {
      visit(tree, 'element', node => {
        if (node.tagName !== 'img') return
        const style = String(node.properties.style || '')
        const match = style.match(/(?:^|;)\s*zoom\s*:\s*(\d*\.?\d+)\s*(%?)\s*(?:;|$)/i)
        delete node.properties.style
        if (!match) return
        const scale = Number(match[1]) / (match[2] ? 100 : 1)
        if (Number.isFinite(scale) && scale > 0) node.properties.style = `--note-image-scale:${scale}`
      })
    }
  }

  function anchors() {
    return (tree: HtmlRoot) => {
      const explicitIds = new Set<string>()
      visit(tree, 'element', node => { if (typeof node.properties.id === 'string') explicitIds.add(node.properties.id) })
      visit(tree, 'element', (node: Element) => {
        // Imported formulas may group a vertical delimiter as \Big{|}.
        // Normalize only math elements, leaving notes and code samples intact.
        if (node.tagName === 'code' && (node.properties.className as string[] | undefined)?.some(name => ['language-math', 'math-inline', 'math-display'].includes(name))) {
          for (const child of node.children) {
            if (child.type === 'text') child.value = child.value.replace(/\\(big|Big|bigg|Bigg)([lrm]?)\s*\{\s*(\||\\vert|\\Vert)\s*\}/g, (_, size, side, delimiter) => `\\${size}${side}${delimiter}`)
          }
        }
        if (/^h[1-6]$/.test(node.tagName)) {
          const title = toText(node)
          const id = String(node.properties.id || slugger.slug(title))
          node.properties.id = id
          node.children.push({ type: 'element', tagName: 'a', properties: { href: `#${id}`, className: ['heading-anchor'], ariaLabel: `定位到 ${title}` }, children: [{ type: 'text', value: '#' }] })
        }
        if (node.tagName === 'a' && /^https?:\/\//.test(String(node.properties.href))) node.properties.rel = ['noreferrer', 'noopener']
        if (node.tagName === 'a' && typeof node.properties.href === 'string' && node.properties.href.startsWith('#')) {
          const prefixed = `user-content-${node.properties.href.slice(1)}`
          if (explicitIds.has(prefixed)) node.properties.href = `#${prefixed}`
        }
        if (node.tagName === 'img') {
          node.properties.src = rewriteUrl(String(node.properties.src || ''))
          node.properties.loading = 'lazy'
          node.properties.decoding = 'async'
        }
      })
    }
  }

  const result = await unified()
    .use(remarkParse).use(remarkGfm).use(remarkMath)
    .use(markdownCompatibility).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw)
    .use(typoraImages)
    .use(rehypeSanitize, {
      ...defaultSchema,
      tagNames: [...(defaultSchema.tagNames || []), 'mark'],
      attributes: {
        ...defaultSchema.attributes,
        '*': [...(defaultSchema.attributes?.['*'] || []), 'className'],
        code: [...(defaultSchema.attributes?.code || []), ['className', /^language-./, 'math-inline', 'math-display']],
        img: [...(defaultSchema.attributes?.img || []), ['style', /^--note-image-scale:[\d.e+-]+$/]],
      },
    })
    .use(anchors)
    .use(rehypeKatex, { strict: false, trust: false, throwOnError: false, macros: { '\\R': '\\mathbb{R}', '\\C': '\\mathbb{C}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}' } })
    .use(rehypeHighlight, { detect: false, plainText: ['latex'] })
    .use(rehypeStringify)
    .process(normalized)
  return { html: String(result), equationCount, warnings: result.messages.map(message => String(message)) }
}
