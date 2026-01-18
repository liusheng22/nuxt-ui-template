<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { data, pending, error } = await useFetch('/api/supabase/health')

// definePageMeta({
//   // Example of opt-in auth guard using `app/middleware/auth.global.ts`.
//   requiresAuth: true,
// })

const highlights = [
  {
    title: 'Design-led sections',
    description: 'Hero, features, social proof, and CTA blocks crafted for marketing teams.',
  },
  {
    title: 'Sane defaults',
    description: 'Clean file structure, minimal glue code, and lightweight theme tokens.',
  },
  {
    title: 'Supabase-first',
    description: 'Runtime config + Nitro plugin to keep server-side access simple.',
  },
]

const buildSteps = [
  {
    title: 'Customize the copy',
    description: 'Replace the text arrays and links to match your product story.',
  },
  {
    title: 'Brand it',
    description: 'Swap logo, colors, and fonts for a polished marketing identity.',
  },
  {
    title: 'Connect data',
    description: 'Turn on Supabase to unlock auth, data, and storage flows.',
  },
]

const stack = [
  { label: 'Nuxt 4', value: 'Routing, SSR, and developer experience.' },
  { label: 'Nuxt UI', value: 'Ready-made UI primitives and marketing sections.' },
  { label: 'Tailwind CSS', value: 'Utility-first styling with theme tokens.' },
  { label: 'Supabase', value: 'Optional backend for auth and data.' },
]

const heroLinks: ButtonProps[] = [
  { label: 'Get started', to: '/auth', color: 'primary', size: 'lg' },
  { label: 'View landing', to: '/', color: 'neutral', variant: 'subtle', size: 'lg' },
]
</script>

<template>
  <UPage>
    <UPageHero
      headline="Template overview"
      title="Build a marketing site that feels premium"
      description="Pre-built Nuxt UI sections plus clean structure so you can ship a polished website quickly."
      :links="heroLinks"
    >
      <template #body>
        <div class="flex flex-wrap gap-3 text-sm text-muted">
          <UBadge
            color="primary"
            variant="subtle"
          >
            Nuxt UI
          </UBadge>
          <UBadge
            color="neutral"
            variant="subtle"
          >
            Supabase ready
          </UBadge>
          <UBadge
            color="neutral"
            variant="subtle"
          >
            Marketing-first
          </UBadge>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      headline="Highlights"
      title="Everything you need to launch"
    >
      <UPageGrid class="md:grid-cols-3">
        <UCard
          v-for="item in highlights"
          :key="item.title"
          class="group relative h-full overflow-hidden border border-default/60 bg-muted"
        >
          <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-60" />
          <div class="space-y-3">
            <div class="text-lg font-semibold text-highlighted">
              {{ item.title }}
            </div>
            <p class="text-sm text-muted">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="Supabase"
      title="Backend-ready status"
    >
      <UCard class="overflow-hidden">
        <div class="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div class="space-y-4">
            <div class="text-lg font-semibold">
              Supabase connection health
            </div>
            <p class="text-sm text-muted">
              This template ships with a server plugin and a tiny health endpoint to prove your config works.
            </p>
            <UAlert
              v-if="pending"
              title="Checking Supabase configuration"
              description="Looking for runtime config values in .env."
              color="neutral"
            />
            <UAlert
              v-else-if="error"
              title="Unable to read Supabase status"
              description="The API endpoint did not respond."
              color="error"
            />
            <UAlert
              v-else
              :title="data?.configured ? 'Supabase is configured' : 'Supabase is not configured'"
              :description="data?.message"
              :color="data?.configured ? 'success' : 'warning'"
            />
          </div>
          <div class="rounded-2xl border border-dashed border-default/60 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 p-6 text-sm text-muted">
            <div class="text-base font-semibold text-highlighted">
              Next steps
            </div>
            <ul class="mt-3 space-y-2">
              <li>• Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to `.env`.</li>
              <li>• Use `useSupabaseClient()` to access data on the client.</li>
              <li>• Extend the server route for health checks or auth.</li>
            </ul>
          </div>
        </div>
      </UCard>
    </UPageSection>

    <UPageSection
      headline="How it works"
      title="Three steps to ship"
    >
      <UPageGrid class="md:grid-cols-3">
        <UCard
          v-for="(step, index) in buildSteps"
          :key="step.title"
          class="h-full"
        >
          <div class="space-y-3">
            <div class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
              Step {{ index + 1 }}
            </div>
            <div class="text-lg font-semibold">
              {{ step.title }}
            </div>
            <p class="text-sm text-muted">
              {{ step.description }}
            </p>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="Tech stack"
      title="Why this stack works"
    >
      <UPageGrid class="md:grid-cols-2">
        <UCard
          v-for="item in stack"
          :key="item.label"
          class="h-full"
        >
          <div class="space-y-2">
            <div class="text-base font-semibold">
              {{ item.label }}
            </div>
            <p class="text-sm text-muted">
              {{ item.value }}
            </p>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>
