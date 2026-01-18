import { createBrowserClient, createServerClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'
import { parseCookies, setCookie } from 'h3'

export default defineNuxtPlugin((): { provide: { supabase: SupabaseClient | null } } => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseAnonKey = config.public.supabaseAnonKey

  if (!supabaseUrl || !supabaseAnonKey) {
    // Template-friendly: don't hard-error when Supabase isn't configured.
    return { provide: { supabase: null } }
  }

  if (import.meta.server) {
    const event = useRequestEvent()
    if (!event) return { provide: { supabase: null } }

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          const cookies = parseCookies(event)
          return Object.entries(cookies).map(([name, value]) => ({ name, value }))
        },
        setAll(cookies) {
          for (const cookie of cookies) {
            setCookie(event, cookie.name, cookie.value, cookie.options as any)
          }
        },
      },
    })

    return { provide: { supabase } }
  }

  const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
  return { provide: { supabase } }
})
