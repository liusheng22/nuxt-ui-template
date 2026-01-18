<script setup lang="ts">
const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Templates', to: '/features#template' },
      { label: 'Security', to: '/features#security' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', to: '/features#docs' },
      { label: 'Changelog', to: '/features#changelog' },
      { label: 'Support', to: '/features#support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/features#about' },
      { label: 'Careers', to: '/features#careers' },
      { label: 'Contact', to: '/features#contact' },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-default/60 bg-default">
    <UContainer class="grid gap-10 py-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
      <div class="space-y-3">
        <div class="text-lg font-semibold">
          Nuxt UI Template
        </div>
        <p class="text-sm text-muted">
          A clean Nuxt 4 template built with Nuxt UI, ready for landing pages,
          product launches, and marketing sites.
        </p>
        <div class="text-xs text-dimmed">
          © 2025 Nuxt UI Template
        </div>
      </div>

      <div
        v-for="column in columns"
        :key="column.title"
        class="space-y-3"
      >
        <div class="text-sm font-semibold text-highlighted">
          {{ column.title }}
        </div>
        <ul class="space-y-2 text-sm text-muted">
          <li
            v-for="link in column.links"
            :key="link.label"
          >
            <NuxtLink
              :to="link.to"
              class="transition hover:text-highlighted"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </UContainer>
  </footer>
</template>
