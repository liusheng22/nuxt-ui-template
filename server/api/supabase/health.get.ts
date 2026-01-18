export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseAnonKey = config.public.supabaseAnonKey
  const supabaseServer = Boolean((event.context as { supabase?: unknown }).supabase)

  const configured = Boolean(supabaseUrl && supabaseAnonKey)

  return {
    configured,
    serverClientReady: supabaseServer,
    message: configured
      ? 'Runtime config is set. Server client is available for API routes.'
      : 'Set SUPABASE_URL and SUPABASE_ANON_KEY in .env to enable Supabase.',
  }
})
