# 本地网页使用指南

项目目录：

```text
/Users/yuanyi/Documents/ChatGPT/front-end
```

## 本地实时预览

```bash
cd /Users/yuanyi/Documents/ChatGPT/front-end
npm run dev
```

浏览器打开：

```text
http://127.0.0.1:5173/
```

开发服务器运行期间，修改 `content/` 下的 Markdown 笔记并保存，网页会自动刷新。终端需要保持打开；结束预览时在该终端按 `Ctrl+C`。

如果提示 `5173` 端口已被占用，通常说明本地预览已经在运行，直接打开上面的地址即可。

## 生成静态网页

```bash
cd /Users/yuanyi/Documents/ChatGPT/front-end
npm run build
```

生成结果位于：

```text
/Users/yuanyi/Documents/ChatGPT/front-end/dist
```

该命令会检查 TypeScript、构建前端资源，并把所有课程和笔记导出为静态 HTML。`dist/` 是自动生成目录，不需要手动编辑。

## 预览静态构建结果

先完成 `npm run build`，再执行：

```bash
npm run preview
```

浏览器打开：

```text
http://127.0.0.1:4173/
```

这一步展示的是 `dist/` 中已经导出的网页，更接近最终发布到 GitHub Pages 的效果。结束时在终端按 `Ctrl+C`。

## 常用流程

平时编辑笔记：

```bash
cd /Users/yuanyi/Documents/ChatGPT/front-end
npm run dev
```

准备检查完整构建结果：

```bash
cd /Users/yuanyi/Documents/ChatGPT/front-end
npm run build
npm run preview
```

当前课程的笔记目录为：

```text
content/numerical-analysis/
content/geometry-topology/
content/real-analysis/
```

课程名称、章节名称和网页地址前缀统一配置在 `site.config.ts` 中。
