import { App } from './App'
import { Home } from './Home'
import type { SitePageData } from './types'

export function Site({ data }: { data: SitePageData }) {
  return data.kind === 'home' ? <Home data={data} /> : <App data={data} />
}
