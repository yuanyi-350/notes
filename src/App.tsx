import { useEffect, useRef, useState } from 'react'
import type { PageData } from './types'

function Icon({ name, size = 18 }: { name: 'chevron' | 'arrow' | 'menu' | 'close'; size?: number }) {
  const paths = {
    chevron: <path d="m9 5 7 7-7 7" />,
    arrow: <><path d="M4 12h16M14 6l6 6-6 6" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export function App({ data }: { data: PageData }) {
  const { site, notes, note } = data
  const [menuOpen, setMenuOpen] = useState(false)
  const sidebar = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const main = useRef<HTMLElement>(null)
  const groups = [...new Set(notes.map(item => item.chapter))]
  const index = notes.findIndex(item => item.slug === note.slug)
  const previous = notes[index - 1]
  const next = notes[index + 1]

  useEffect(() => {
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
  }, [note])

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
      <button ref={menuButton} className="icon-button" aria-label="打开章节目录" aria-expanded={menuOpen} aria-controls="chapter-navigation" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
      <span>{site.bookTitle}</span>
    </header>

    {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}
    <aside ref={sidebar} className={`sidebar ${menuOpen ? 'is-open' : ''}`} id="chapter-navigation" aria-label="章节目录">
      <button className="icon-button mobile-close" aria-label="关闭章节目录" onClick={() => setMenuOpen(false)}><Icon name="close" /></button>
      <a className="all-courses-link" href="./index.html">← 所有课程</a>
      <div className="book-heading"><h2>{site.bookTitle}</h2></div>
      <nav className="chapter-list" aria-label="笔记章节">
        {groups.map(group => {
          const children = notes.filter(item => item.chapter === group)
          const selected = group === note.chapter
          const title = site.chapters[group] || children[0].title
          if (children.length === 1) return <a key={group} className={`chapter-single ${selected ? 'selected' : ''}`} href={children[0].href} aria-current={selected ? 'page' : undefined}><span className="chapter-number">{/^\d/.test(group) ? group : '·'}</span><span>{title}</span></a>
          return <details key={group} className="chapter-group" open>
            <summary><span className="chapter-number">{group}</span><span>{title}</span><Icon name="chevron" size={13} /></summary>
            <div className="chapter-children">{children.map(child => <a key={child.slug} className={child.slug === note.slug ? 'selected' : ''} href={child.href} aria-current={child.slug === note.slug ? 'page' : undefined}><span className="section-number">{child.number}</span><span>{child.title}</span></a>)}</div>
          </details>
        })}
      </nav>
    </aside>

    <main className="reading-layout" ref={main} id="main-content">
      <div className="article-column">
        <nav className="breadcrumbs" aria-label="面包屑"><a href="./index.html">课程</a><Icon name="chevron" size={11} /><a href={notes[0].href}>{site.bookTitle}</a><Icon name="chevron" size={11} /><span>{note.number}</span></nav>
        <div className="page-heading" id="page-top">
          <h1><span className="title-number">{note.number}</span><span className="title-text">{note.title}</span></h1>
        </div>
        <article className="markdown-body" aria-label={note.title} dangerouslySetInnerHTML={{ __html: note.html }} />
        <nav className="page-navigation" aria-label="前后篇笔记">
          {previous ? <a className="previous-page" href={previous.href}><Icon name="arrow" /><span><small>上一篇</small><strong>{previous.number} · {previous.title}</strong></span></a> : <span className="first-page-label">本章起始</span>}
          {next ? <a className="next-page" href={next.href}><span><small>下一篇</small><strong>{next.number} · {next.title}</strong></span><Icon name="arrow" /></a> : <span className="first-page-label">已读至最后一篇</span>}
        </nav>
      </div>
    </main>
  </>
}
