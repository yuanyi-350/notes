import { hydrateRoot } from 'react-dom/client'
import { Site } from './Site'
import type { SitePageData } from './types'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/github.css'
import './styles.css'

const data = JSON.parse(document.getElementById('page-data')!.textContent!) as SitePageData
hydrateRoot(document.getElementById('root')!, <Site data={data} />)
