export default defineNuxtRouteMiddleware((to) => {
  // Demo middleware: normalize a couple of common URL issues.
  // Keep it conservative: only redirects when it's clearly safe.

  // Remove duplicate trailing slashes (except root).
  if (to.path.length > 1 && to.path.endsWith('//')) {
    const normalized = to.path.replace(/\/+$/, '/')
    return navigateTo({ path: normalized, query: to.query, hash: to.hash }, { redirectCode: 301 })
  }

  // Remove a single trailing slash (except root).
  if (to.path.length > 1 && to.path.endsWith('/')) {
    const normalized = to.path.replace(/\/+$/, '')
    return navigateTo({ path: normalized, query: to.query, hash: to.hash }, { redirectCode: 301 })
  }
})
