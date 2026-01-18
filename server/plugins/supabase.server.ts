import { createClient } from '@supabase/supabase-js'

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const serviceRoleKey = config.supabase.serviceRoleKey

  if (!supabaseUrl || !serviceRoleKey) {
    return
  }

  const supabaseServer = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  nitroApp.hooks.hook('request', (event) => {
    // attach to event context for server routes / APIs
    event.context.supabase = supabaseServer
  })
})
