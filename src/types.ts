export interface CourseConfig {
  id: string
  title: string
  notesDirectory?: string
  routePrefix: string
  chapters: Record<string, string>
  exclude?: string[]
  entries?: Record<string, { title?: string; number?: string; chapter?: string; order?: number; resources?: string[]; sourceUrl?: string }>
  resources?: ResourceConfig[]
}
export interface ResourceConfig {
  id: string
  title: string
  url: string
  chapter?: string
}
export interface CourseSummary { id: string; title: string; href: string; noteCount: number; resourceCount: number; topics: string[] }
export interface Course { config: CourseConfig; notes: Note[]; resources: ResourceSummary[]; items: ContentItem[] }
interface ContentBase {
  slug: string
  title: string
  chapter: string
  href: string
}
export interface NoteSummary extends ContentBase { kind: 'note'; number: string }
export interface ResourceSummary extends ContentBase { kind: 'resource'; id: string; url: string }
export type ContentSummary = NoteSummary | ResourceSummary
export interface Note extends NoteSummary {
  fileName: string
  html: string
  equationCount: number
  warnings: string[]
  resourceIds: string[]
  sourceUrl?: string
}
export type ContentItem = Note | ResourceSummary
export interface PageData {
  kind: 'content'
  site: { bookTitle: string; chapters: Record<string, string> }
  items: ContentSummary[]
  entry: (NoteSummary & { html: string; resources: ResourceSummary[]; sourceUrl?: string }) | (ResourceSummary & { notes: NoteSummary[] })
}
export interface HomeData { kind: 'home'; title: string; courses: CourseSummary[] }
export type SitePageData = PageData | HomeData
