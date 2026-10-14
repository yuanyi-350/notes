import type { HomeData } from './types'

export function Home({ data }: { data: HomeData }) {
  return <main className="course-home">
    <header className="course-home-heading"><h1>课程</h1><span>{data.courses.length} 门</span></header>
    <nav aria-label="所有课程">
      {data.courses.map((course, index) => <a className="course-row" key={course.id} href={course.href}>
        <span className="course-index">{String(index + 1).padStart(2, '0')}</span>
        <div className="course-description"><h2>{course.title}</h2><p>{course.topics.join(' · ')}</p></div>
        <span className="course-count">{[course.noteCount ? `${course.noteCount} 篇笔记` : '', course.resourceCount ? `${course.resourceCount} 个资源` : ''].filter(Boolean).join(' · ')}</span><span className="course-arrow" aria-hidden="true">→</span>
      </a>)}
    </nav>
  </main>
}
