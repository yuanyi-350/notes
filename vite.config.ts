import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'
import { siteConfig } from './site.config.ts'

export default defineConfig({
  base: './',
  plugins: [react(), {
    name: 'markdown-pages',
    configureServer(server) {
      const roots = new Map(siteConfig.courses.map(course => [course.id, resolve(course.notesDirectory)]))
      server.watcher.add([...roots.values()])
      server.watcher.on('all', async (_event, path) => {
        if (![...roots.values()].some(root => path.startsWith(root + sep))) return
        const renderer = await server.ssrLoadModule('/scripts/render.tsx')
        renderer.invalidateBook()
        server.ws.send({ type: 'full-reload' })
      })
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split('?')[0] || '/'
        if (path.startsWith('/source/')) {
          try {
            const [courseId, ...parts] = decodeURIComponent(path.slice('/source/'.length)).split('/')
            const root = roots.get(courseId)
            if (!root) { res.statusCode = 404; res.end(); return }
            const file = resolve(root, parts.join('/'))
            if (!file.startsWith(root + sep) || file.split(sep).some(part => part.startsWith('.')) || /\.md$/i.test(file)) { res.statusCode = 403; res.end(); return }
            const types: Record<string, string> = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.pdf': 'application/pdf' }
            res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream')
            res.end(await readFile(file))
          } catch { res.statusCode = 404; res.end('文件不存在') }
          return
        }
        if (path !== '/' && !/^\/[^/]+\.html$/.test(path)) return next()
        try {
          const template = await server.transformIndexHtml(path, await readFile(resolve('index.html'), 'utf8'))
          const { renderRequest } = await server.ssrLoadModule('/scripts/render.tsx')
          const html = await renderRequest(template, path)
          if (!html) { res.statusCode = 404; res.end('未找到这篇笔记'); return }
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(html)
        } catch (error) { next(error) }
      })
    },
  }],
})
