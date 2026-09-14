export interface CourseConfig {
  id: string
  title: string
  notesDirectory: string
  routePrefix: string
  chapters: Record<string, string>
  exclude?: string[]
  entries?: Record<string, { title?: string; number?: string; chapter?: string; order?: number }>
}
export interface CourseSummary { id: string; title: string; href: string; noteCount: number; topics: string[] }
export interface Course { config: CourseConfig; notes: Note[] }
export interface NoteSummary {
  slug: string
  title: string
  number: string
  chapter: string
  href: string
}
export interface Note extends NoteSummary {
  fileName: string
  html: string
  equationCount: number
  warnings: string[]
}
export interface PageData {
  kind: 'note'
  site: { bookTitle: string; chapters: Record<string, string> }
  notes: NoteSummary[]
  note: NoteSummary & { html: string }
}
export interface HomeData { kind: 'home'; title: string; courses: CourseSummary[] }
export type SitePageData = PageData | HomeData
