<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const heroLinks: ButtonProps[] = [
  { label: 'Get started', to: '/auth', color: 'primary', size: 'xl' },
  { label: 'View features', to: '/features', color: 'neutral', variant: 'subtle', size: 'xl' },
]

const featureList = [
  {
    title: 'Nuxt UI foundation',
    description: 'Pre-wired layouts, sections, and UI primitives so you can focus on copy and visuals.',
  },
  {
    title: 'Marketing-ready sections',
    description: 'Hero, feature grids, testimonials, and CTA blocks ready to duplicate.',
  },
  {
    title: 'Supabase-friendly',
    description: 'Server plugin and runtime config are already prepared for Supabase use.',
  },
  {
    title: 'Fast iteration',
    description: 'Clear file structure, minimal glue code, and sensible defaults for teams.',
  },
]

const highlights = [
  {
    title: 'Simple content model',
    description: 'Update arrays in the page scripts to ship new sections quickly.',
  },
  {
    title: 'Composable sections',
    description: 'Mix Nuxt UI Page blocks with custom components as the site grows.',
  },
  {
    title: 'Ready for hand-off',
    description: 'Add copy, branding, and hosting with minimal engineering overhead.',
  },
]

const testimonials = [
  {
    quote: 'We launched a new marketing site in two afternoons. Nuxt UI made the layout effortless.',
    author: 'Lina Xu · Growth Lead',
  },
  {
    quote: 'The template is clean, predictable, and keeps the content editable for non-devs.',
    author: 'Marco Silva · Product Designer',
  },
  {
    quote: 'Easy to extend with Supabase when we needed authentication and content APIs.',
    author: 'Shuhei Tan · Engineer',
  },
]
</script>

<template>
  <UPage>
    <UPageHero
      headline="Nuxt UI Template"
      title="Launch a polished marketing site fast"
      description="A Nuxt 4 + Nuxt UI starter built for landing pages, product announcements, and template demos."
      :links="heroLinks"
    >
      <template #body>
        <div class="flex flex-wrap gap-3 text-sm text-muted">
          <UBadge
            color="primary"
            variant="subtle"
          >
            Nuxt 4
          </UBadge>
          <UBadge
            color="neutral"
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
        </div>
      </template>
    </UPageHero>

    <UPageSection
      headline="Why this template"
      title="Everything you need for a modern marketing site"
      description="A focused starter that keeps things simple, fast, and easy to extend."
      :features="featureList"
    />

    <UPageSection
      headline="What you get"
      title="Core building blocks"
    >
      <UPageGrid>
        <UCard
          v-for="highlight in highlights"
          :key="highlight.title"
          class="h-full"
        >
          <div class="space-y-2">
            <div class="text-base font-semibold">
              {{ highlight.title }}
            </div>
            <p class="text-sm text-muted">
              {{ highlight.description }}
            </p>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="Testimonials"
      title="Teams ship faster"
    >
      <UPageGrid class="md:grid-cols-3">
        <UCard
          v-for="item in testimonials"
          :key="item.author"
          class="h-full"
        >
          <div class="space-y-4">
            <p class="text-sm text-muted">
              “{{ item.quote }}”
            </p>
            <div class="text-sm font-semibold">
              {{ item.author }}
            </div>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageCTA
      title="Start your next launch today"
      description="Customize the copy, plug in your brand, and ship in hours."
      :links="heroLinks"
    />
  </UPage>
</template>
