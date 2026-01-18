export default defineNuxtRouteMiddleware((to, from) => {
  if (!import.meta.dev) return
  // Simple navigation log for template users.

  console.log('[route]', from.fullPath, '->', to.fullPath)
})
