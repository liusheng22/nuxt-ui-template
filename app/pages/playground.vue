<script setup lang="ts">
import { formatDate } from '@/lib'

const counter = useCounterStore()
const { data, pending } = await useFetch('/api/supabase/health')

const today = formatDate(new Date())
</script>

<template>
  <UPage>
    <UContainer class="relative py-12">
      <!-- Decorative background blobs (subtle, marketing-ish) -->
      <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div class="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="space-y-2">
            <div class="text-sm font-semibold text-emerald-500">
              Template playground
            </div>
            <h1 class="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
              Verify the basics, fast
            </h1>
            <p class="max-w-2xl text-sm text-muted">
              A compact page to demonstrate Nuxt UI components, a Pinia store, and a server API route.
            </p>
          </div>
          <UBadge
            color="neutral"
            variant="subtle"
            class="w-fit"
          >
            Today: {{ today }}
          </UBadge>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <UCard class="h-full">
            <div class="space-y-5">
              <div class="space-y-1">
                <div class="text-xs font-semibold uppercase tracking-[0.2em] text-dimmed">
                  Store
                </div>
                <div class="text-lg font-semibold">
                  Pinia counter
                </div>
                <p class="text-sm text-muted">
                  Small state, computed value, and actions.
                </p>
              </div>

              <div class="rounded-xl border border-default/60 bg-muted p-4">
                <div class="text-sm text-muted">
                  Count:
                  <span class="font-semibold text-highlighted">{{ counter.count }}</span>
                  <span class="px-2 text-dimmed">•</span>
                  Doubled:
                  <span class="font-semibold text-highlighted">{{ counter.doubled }}</span>
                </div>
                <div class="mt-4 flex gap-3">
                  <UButton
                    color="primary"
                    @click="counter.inc()"
                  >
                    Increment
                  </UButton>
                  <UButton
                    color="neutral"
                    variant="subtle"
                    @click="counter.reset()"
                  >
                    Reset
                  </UButton>
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="h-full">
            <div class="space-y-5">
              <div class="space-y-1">
                <div class="text-xs font-semibold uppercase tracking-[0.2em] text-dimmed">
                  Server
                </div>
                <div class="text-lg font-semibold">
                  Supabase health endpoint
                </div>
                <p class="text-sm text-muted">
                  Calls <code class="rounded bg-muted px-1">/api/supabase/health</code> to verify config.
                </p>
              </div>

              <USkeleton
                v-if="pending"
                class="h-24"
              />
              <UAlert
                v-else
                :color="data?.configured ? 'success' : 'warning'"
                :title="data?.configured ? 'Supabase configured' : 'Supabase not configured'"
                :description="data?.message"
              />

              <div class="text-xs text-dimmed">
                Tip: set <code class="rounded bg-muted px-1">SUPABASE_URL</code> and
                <code class="rounded bg-muted px-1">SUPABASE_ANON_KEY</code> in <code class="rounded bg-muted px-1">.env</code>.
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>
