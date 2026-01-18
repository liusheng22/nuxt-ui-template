/// <reference types="node" />
// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.SITE_URL

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/seo',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt UI Template',
      titleTemplate: '%s · Nuxt UI Template',
      htmlAttrs: { lang: 'en' },
      link: [
        // Favicons
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        // Apple touch icon uses your designer-provided logo.png
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' },
      ],
      meta: [
        { name: 'description', content: 'A Nuxt 4 template powered by Nuxt UI v4 (Tailwind CSS v4).' },
        { name: 'theme-color', content: '#0A0A0A' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Social preview defaults (can be overridden per page)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nuxt UI Template' },
        { property: 'og:title', content: 'Nuxt UI Template' },
        { property: 'og:description', content: 'A Nuxt 4 template powered by Nuxt UI v4 (Tailwind CSS v4).' },
        { property: 'og:image', content: '/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nuxt UI Template' },
        { name: 'twitter:description', content: 'A Nuxt 4 template powered by Nuxt UI v4 (Tailwind CSS v4).' },
        { name: 'twitter:image', content: '/logo.png' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: siteUrl,
    name: 'Nuxt UI Template',
    description: 'A Nuxt 4 template powered by Nuxt UI v4 (Tailwind CSS v4).',
  },
  colorMode: {
    // Nuxt UI expects `.light` / `.dark` classes.
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  runtimeConfig: {
    supabase: {
      serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
    // options here
  },
  robots: {
    // Keep demo routes out of robots index.
    disallow: ['/auth', '/playground'],
  },
  sitemap: {
    // Keep marketing pages indexed; exclude demo-only routes.
    exclude: ['/auth', '/playground'],
  },
})
