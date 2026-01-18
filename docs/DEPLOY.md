# Deployment

This template is a standard Nuxt 4 app. You can deploy it to any Node-compatible hosting.

## Vercel

1. Import the repository in Vercel.
2. Framework preset: Nuxt.
3. Build command: `pnpm build`
4. Output: (auto-detected by Vercel)
5. Add environment variables:
   - `SITE_URL` (e.g. `https://your-domain.com`)
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only, optional)

## Cloudflare

If you want Cloudflare Pages/Workers, follow Nuxt deployment docs for Cloudflare.

Environment variables are the same as above.

## Notes

- If you don't set Supabase env vars, the template still runs, but Supabase features will be disabled (`$supabase` is `null`).
