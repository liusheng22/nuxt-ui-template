# Nuxt UI Template

English | [简体中文](./README.zh-CN.md)

Nuxt 4 template powered by **Nuxt UI v4** (Tailwind CSS v4).

## Requirements

- Node.js 20+ (recommended)
- pnpm (via Corepack): `corepack enable`

## What's Included

- Landing page: `/`
- Features page: `/features`
- Auth modal demo: `/auth`
- Playground (store + server): `/playground`
- Light/Dark mode toggle in header (system by default)
- Supabase ready:
  - Client plugin injection: `app/plugins/supabase.ts`
  - Server service-role injection: `server/plugins/supabase.server.ts`
  - Health endpoint: `server/api/supabase/health.get.ts`
  - `$supabase` is typed as `SupabaseClient | null` (safe when env is not set): `types/supabase.d.ts`
- SEO:
  - Sitemap: `/sitemap.xml` (generated)
  - Robots: `/robots.txt` (generated)

## Quick Start

### Option A: GitHub Template (recommended)

Use GitHub's “Use this template” button:

https://github.com/liusheng22/nuxt-ui-template

### Option B: One-command download (giget)

```bash
npx giget liusheng22/nuxt-ui-template my-app
# or: pnpm dlx giget liusheng22/nuxt-ui-template my-app
cd my-app
pnpm install
cp .env.example .env
pnpm dev
```

### Option C: One-command download (degit)

```bash
npx degit liusheng22/nuxt-ui-template my-app
```

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Environment Variables

Create a `.env` file:

```bash
# Used for sitemap/robots canonical URLs
SITE_URL=https://your-domain.com

# Public (client + server)
SUPABASE_URL=
SUPABASE_ANON_KEY=

# Server-only (optional)
SUPABASE_SERVICE_ROLE_KEY=
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Scripts

```bash
pnpm lint
pnpm lint:fix
pnpm typecheck
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

## Project Structure

```txt
app/
  components/      # App components (Nuxt auto-import)
  composables/     # App composables
  layouts/         # Layouts
  lib/             # Small shared utilities (keep minimal)
  middleware/      # Global middleware examples (utm / url normalization)
  pages/           # File-based routing
  plugins/         # Nuxt plugins
  stores/          # Pinia stores
  types/           # Shared TS types (optional, template examples)
server/
  api/             # Server routes
  plugins/         # Nitro plugins
```

## Deployment

- Default: `pnpm build` and run the generated output (Node hosting).
- For platform-specific deployment:
  - See `docs/DEPLOY.md`
  - Nuxt docs: https://nuxt.com/docs/getting-started/deployment

## Formatting

This template uses ESLint (Nuxt ESLint + stylistic rules) as the single source of formatting.
Prettier is intentionally not included.
