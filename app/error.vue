<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const isDev = import.meta.dev
const statusCode = computed(() => props.error.statusCode || 500)
const title = computed(() => props.error.statusMessage || 'Something went wrong')
const message = computed(() => {
  if (typeof props.error.message === 'string' && props.error.message.trim()) return props.error.message
  return 'An unexpected error occurred. Please try again.'
})

const handleHome = () => clearError({ redirect: '/' })
</script>

<template>
  <UPage>
    <UContainer class="py-16">
      <UCard class="mx-auto max-w-2xl">
        <div class="space-y-6">
          <div class="space-y-2">
            <div class="text-sm font-semibold text-dimmed">
              Error {{ statusCode }}
            </div>
            <div class="text-2xl font-semibold text-highlighted">
              {{ title }}
            </div>
            <p class="text-sm text-muted">
              {{ message }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              color="primary"
              @click="handleHome"
            >
              Back to home
            </UButton>
            <UButton
              color="neutral"
              variant="subtle"
              @click="clearError()"
            >
              Dismiss
            </UButton>
          </div>

          <details
            v-if="isDev"
            class="rounded-lg border border-default/60 bg-muted p-4 text-sm"
          >
            <summary class="cursor-pointer select-none font-semibold">
              Debug details (dev only)
            </summary>
            <pre class="mt-3 overflow-auto text-xs text-muted">{{ props.error }}</pre>
          </details>
        </div>
      </UCard>
    </UContainer>
  </UPage>
</template>
