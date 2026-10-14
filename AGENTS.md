# AGENTS.md

课程笔记与网页资源静态网站（React + TypeScript + Vite）。Markdown 笔记放在 `content/<课程>/`，由 `scripts/` 编译成静态 HTML；课程索引、章节名称、路由前缀、网页资源与笔记关联统一配置在 `site.config.ts`。

## 项目目录

```text
/Users/yuanyi/Documents/Math/front-end
```

以下命令均在此目录执行。

## 常用命令

```bash
npm run dev        # 本地实时预览 http://127.0.0.1:5173/
npm run build      # 类型检查 + 构建 + 导出静态 HTML 到 dist/（发布前必跑）
npm run preview    # 预览 dist/ 静态结果 http://127.0.0.1:4173/
npm run import:notes -- /笔记目录 --course <课程id> [--overwrite]
```

## 本地实时预览

```bash
npm run dev
```

浏览器打开 <http://127.0.0.1:5173/>。开发服务器运行期间，修改 `content/` 下的 Markdown 笔记并保存，网页会自动刷新；终端需要保持打开，结束预览时按 `Ctrl+C`。如果提示 `5173` 端口已被占用，通常说明本地预览已经在运行，直接打开上面的地址即可。

## 生成并预览静态网页（发布前检查）

```bash
npm run build
npm run preview
```

- `npm run build` 会做 TypeScript 类型检查、构建前端资源，并把所有课程和笔记导出为静态 HTML 到 `dist/`。`dist/` 是自动生成目录，不要手动编辑（已被 Git 忽略）。
- `npm run preview` 在 <http://127.0.0.1:4173/> 展示 `dist/` 中已导出的网页，更接近最终发布到 GitHub Pages 的效果；结束时按 `Ctrl+C`。
- 常用流程：平时编辑笔记用 `npm run dev`；准备保存版本或发布前，再 `npm run build` + `npm run preview` 做完整检查。

## 目录结构

- `content/<课程>/`：课程笔记。`Section<编号>_<标题>.md` 命名会自动解析编号（如 `Section5.2_xxx.md` → 编号 5.2、归入第 5 章）；图片等附件放在课程目录（推荐 `figures/`），笔记内用相对路径引用。
- `site.config.ts`：唯一需要维护的索引。数组顺序即课程首页顺序。
- 课程的 `resources` 登记网页资源（id、title、url，可选 chapter）；资源有独立站内页，正文仅显示原站链接及相关笔记，在新标签页访问原站。不指定 chapter 时归入「代码与资源」。
- 笔记的 `entries[文件名].resources` 填写该课程内的资源 id，可多篇笔记关联同一仓库；资源页自动反向列出相关笔记。`sourceUrl` 是笔记的原始讲义链接，显示在标题下；这些配置不需要改动 Markdown 原文。
- 课程可以只有网页资源，此时省略 `notesDirectory`。同主题下先显示笔记，再显示网页资源；数字章节按编号排列，命名章节遵循 `chapters`，资源按数组顺序排列。
- `src/`：React 前端；`scripts/`：Markdown 编译与静态导出逻辑。
- `dist/`：生成产物，不要手动编辑，也不要提交。

当前有哪些课程、各课程包含哪些笔记，以 `site.config.ts` 为准（首页顺序即该文件中数组的顺序）。

## 验证与注意

- 修改配置或内容后运行 `npm run build` 做完整校验；slug 冲突、无效课程或资源 id、无效 HTTP(S) 链接、缺失的资源关联会直接报错。
- dev server 会监听 `content/` 变化并自动刷新；改 `site.config.ts` 后如未生效，重启 dev server。
- UI 文案与文档使用中文；数学公式用 `$...$` / `$$...$$`。
- `AGENTS.md`、`CLAUDE.md`、`SKILL.md` 不会被当作笔记收录。

## 维护原则

- 本项目无对外兼容性需求：不需要保留旧网页链接、旧配置格式等历史包袱，重构时直接切换到新方案。
- 优先维护项目的简洁性：删除失效代码、注释和配置特例，不为了“以防万一”保留分支逻辑；文档与实际行为不一致时，改文档或改代码，保持同步。
