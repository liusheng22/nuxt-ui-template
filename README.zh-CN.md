# Nuxt UI Template

[English](./README.md) | 简体中文

基于 **Nuxt 4 + Nuxt UI v4（Tailwind CSS v4）** 的模板项目。

## 包含内容

- 营销落地页：`/`
- 功能页：`/features`
- 登录弹窗演示：`/auth`
- Playground（store + server 示例）：`/playground`
- Header 内置 Light/Dark 切换（默认跟随系统）
- Supabase 预置：
  - 客户端注入：`app/plugins/supabase.ts`
  - 服务端（service role）注入：`server/plugins/supabase.server.ts`
  - 健康检查接口：`server/api/supabase/health.get.ts`
  - `$supabase` 类型为 `SupabaseClient | null`（未配置 env 也安全）：`types/supabase.d.ts`
- SEO：
  - Sitemap：`/sitemap.xml`（自动生成）
  - Robots：`/robots.txt`（自动生成）

## 安装

```bash
pnpm install
```

## 环境变量

新建 `.env`：

```bash
# 站点域名（用于 sitemap / robots 中的 canonical URL）
SITE_URL=https://your-domain.com

# Public（client + server）
SUPABASE_URL=
SUPABASE_ANON_KEY=

# 仅服务端（可选）
SUPABASE_SERVICE_ROLE_KEY=
```

## 本地开发

启动开发服务（默认 http://localhost:3000）：

```bash
pnpm dev
```

## 常用脚本

```bash
pnpm lint
pnpm lint:fix
pnpm typecheck
```

## 构建与预览

```bash
pnpm build
pnpm preview
```

## 项目结构

```txt
app/
  components/      # 组件（Nuxt 自动导入）
  composables/     # 组合式函数
  layouts/         # 布局
  lib/             # 小型工具库（尽量保持精简）
  middleware/      # 全局 middleware 示例（utm / url 规范化）
  pages/           # 基于文件的路由
  plugins/         # Nuxt 插件
  stores/          # Pinia stores
  types/           # TS 类型（可选，模板示例）
server/
  api/             # Server routes
  plugins/         # Nitro plugins
```

## 部署

- 默认：`pnpm build` 后用 Node 方式运行产物
- 平台相关部署说明：
  - 见 `docs/DEPLOY.md`
  - Nuxt 部署文档：https://nuxt.com/docs/getting-started/deployment

## 代码格式化策略

本模板以 ESLint（Nuxt ESLint + stylistic rules）作为唯一格式化来源，不默认引入 Prettier。
