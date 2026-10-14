import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { ContentSummary, PageData } from './types'

function Icon({ name, size = 18 }: { name: 'chevron' | 'arrow' | 'menu' | 'close' | 'external'; size?: number }) {
  const paths = {
    chevron: <path d="m9 5 7 7-7 7" />,
    arrow: <><path d="M4 12h16M14 6l6 6-6 6" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    external: <><path d="M14 4h6v6M20 4 10 14" /><path d="M10 4H4v16h16v-6" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const itemLabel = (item: ContentSummary) => item.kind === 'note' ? `${item.number} · ${item.title}` : item.title

function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only">（在新标签页打开）</span></a>
}

export function App({ data }: { data: PageData }) {
  const { site, items, entry } = data
  const [menuOpen, setMenuOpen] = useState(false)
  const sidebar = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const main = useRef<HTMLElement>(null)
  const groups = [...new Set(items.map(item => item.chapter))]
  const index = items.findIndex(item => item.slug === entry.slug)
  const previous = items[index - 1]
  const next = items[index + 1]
  const isGitHub = entry.kind === 'resource' && new URL(entry.url).hostname === 'github.com'
  const chapterTitle = (chapter: string) => site.chapters[chapter] || (chapter === 'resources' ? '代码与资源' : items.find(item => item.chapter === chapter)!.title)
  const sidebarLink = (item: ContentSummary, single = false) => <a key={item.slug} className={`${single ? 'chapter-single' : ''} ${item.kind === 'resource' ? 'resource-link' : ''} ${item.slug === entry.slug ? 'selected' : ''}`} href={item.href} aria-current={item.slug === entry.slug ? 'page' : undefined}>
    {item.kind === 'note' && <span className={single ? 'chapter-number' : 'section-number'}>{single ? (/^\d/.test(item.chapter) ? item.chapter : '·') : item.number}</span>}
    <span>{single && item.kind === 'note' ? chapterTitle(item.chapter) : item.title}</span>
    {item.kind === 'resource' && <Icon name="external" size={13} />}
  </a>

  useEffect(() => {
    if (entry.kind !== 'note') return
    let disposed = false
    const containMath = () => {
      if (disposed) return
      // Keep normal inline math on its baseline. Only an indivisible expression
      // wider than its paragraph becomes a horizontally scrollable fragment.
      document.querySelectorAll<HTMLElement>('.katex:not(.katex-display > .katex)').forEach(math => {
        const container = math.closest<HTMLElement>('p, li, .markdown-body')
        if (!container) return
        const style = getComputedStyle(container)
        const available = container.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
        const widest = Math.max(0, ...Array.from(math.querySelectorAll<HTMLElement>(':scope > .katex-html > .base')).map(base => base.getBoundingClientRect().width))
        math.classList.toggle('inline-math-overflow', widest > available)
      })
    }
    const observer = new ResizeObserver(containMath)
    if (main.current) observer.observe(main.current)
    void document.fonts.ready.then(containMath)
    return () => { disposed = true; observer.disconnect() }
  }, [entry])

  useEffect(() => {
    if (!menuOpen) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (main.current) main.current.inert = true
    const first = sidebar.current?.querySelector<HTMLButtonElement>('button')
    first?.focus()
    const resize = () => { if (window.innerWidth > 760) setMenuOpen(false) }
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
      if (event.key === 'Tab') {
        const focusable = Array.from(sidebar.current?.querySelectorAll<HTMLElement>('a, button, summary') || []).filter(el => el.getClientRects().length)
        const first = focusable[0], last = focusable.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', keyboard)
    window.addEventListener('resize', resize)
    return () => { document.body.style.overflow = oldOverflow; if (main.current) main.current.inert = false; document.removeEventListener('keydown', keyboard); window.removeEventListener('resize', resize); menuButton.current?.focus() }
  }, [menuOpen])

  return <>
    <a className="skip-link" href="#main-content">跳转到正文</a>
    <header className="site-header">
      <button ref={menuButton} className="icon-button" aria-label="打开课程目录" aria-expanded={menuOpen} aria-controls="chapter-navigation" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
      <span>{site.bookTitle}</span>
    </header>

    {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}
    <aside ref={sidebar} className={`sidebar ${menuOpen ? 'is-open' : ''}`} id="chapter-navigation" aria-label="课程目录">
      <button className="icon-button mobile-close" aria-label="关闭课程目录" onClick={() => setMenuOpen(false)}><Icon name="close" /></button>
      <a className="all-courses-link" href="./index.html">← 所有课程</a>
      <div className="book-heading"><h2>{site.bookTitle}</h2></div>
      <nav className="chapter-list" aria-label="课程内容">
        {groups.map(group => {
          const children = items.filter(item => item.chapter === group)
          const title = chapterTitle(group)
          if (children.length === 1 && children[0].kind === 'note') return sidebarLink(children[0], true)
          return <details key={group} className="chapter-group" open>
            <summary>{/^\d/.test(group) && <span className="chapter-number">{group}</span>}<span>{title}</span><Icon name="chevron" size={13} /></summary>
            <div className="chapter-children">{children.map(child => sidebarLink(child))}</div>
          </details>
        })}
      </nav>
    </aside>

    <main className="reading-layout" ref={main} id="main-content">
      <div className="article-column">
        <nav className="breadcrumbs" aria-label="面包屑"><a href="./index.html">课程</a><Icon name="chevron" size={11} /><a href={items[0].href}>{site.bookTitle}</a><Icon name="chevron" size={11} /><span>{entry.kind === 'note' ? entry.number : chapterTitle(entry.chapter)}</span></nav>
        <div className="page-heading">
          <h1>{entry.kind === 'note' && <span className="title-number">{entry.number}</span>}<span className="title-text">{entry.title}</span></h1>
          {entry.kind === 'note' && (entry.sourceUrl || entry.resources.length > 0) && <div className="note-links">
            {entry.sourceUrl && <ExternalLink href={entry.sourceUrl}>原始讲义<Icon name="external" size={13} /></ExternalLink>}
            {entry.resources.map(resource => <ExternalLink key={resource.id} href={resource.url}><span>配套代码：{resource.title}</span><Icon name="external" size={13} /></ExternalLink>)}
          </div>}
        </div>
        {entry.kind === 'note' ? <article className="markdown-body" aria-label={entry.title} dangerouslySetInnerHTML={{ __html: entry.html }} /> : <>
          <ExternalLink className="resource-url" href={entry.url}>{isGitHub && <img src="./github.svg" width="20" height="20" alt="" />}<span>{isGitHub ? '打开 GitHub' : entry.url}</span><Icon name="external" size={15} /></ExternalLink>
          {isGitHub && <p className="resource-address"><ExternalLink href={entry.url}>{entry.url}</ExternalLink></p>}
          {entry.notes.length > 0 && <section className="related-notes" aria-labelledby="related-notes-title">
            <h2 id="related-notes-title">相关笔记</h2>
            <nav aria-label="相关笔记">{entry.notes.map(note => <a key={note.slug} href={note.href}><span className="section-number">{note.number}</span><span>{note.title}</span><Icon name="chevron" size={14} /></a>)}</nav>
          </section>}
        </>}
        <nav className="page-navigation" aria-label="前后内容">
          {previous ? <a className="previous-page" href={previous.href}><Icon name="arrow" /><span><small>上一项</small><strong>{itemLabel(previous)}</strong></span></a> : <span className="first-page-label">课程起始</span>}
          {next ? <a className="next-page" href={next.href}><span><small>下一项</small><strong>{itemLabel(next)}</strong></span><Icon name="arrow" /></a> : <span className="first-page-label">已读至最后一项</span>}
        </nav>
      </div>
    </main>
  </>
}
