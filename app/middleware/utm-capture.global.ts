export default defineNuxtRouteMiddleware((to) => {
  // Demo middleware: capture marketing attribution once (UTM/ref) into cookies.
  // Useful for marketing sites: keep origin info for later signup/contact forms.

  const params = to.query
  const utmSource = typeof params.utm_source === 'string' ? params.utm_source : undefined
  const utmMedium = typeof params.utm_medium === 'string' ? params.utm_medium : undefined
  const utmCampaign = typeof params.utm_campaign === 'string' ? params.utm_campaign : undefined
  const ref = typeof params.ref === 'string' ? params.ref : undefined

  // Only write when at least one attribution param exists.
  if (!utmSource && !utmMedium && !utmCampaign && !ref) return

  const cookieOptions = {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: 'lax' as const,
  }

  // Persist as separate cookies so template users can pick what they need.
  if (utmSource) useCookie('utm_source', cookieOptions).value ??= utmSource
  if (utmMedium) useCookie('utm_medium', cookieOptions).value ??= utmMedium
  if (utmCampaign) useCookie('utm_campaign', cookieOptions).value ??= utmCampaign
  if (ref) useCookie('ref', cookieOptions).value ??= ref
})
