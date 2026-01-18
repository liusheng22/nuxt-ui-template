<script setup lang="ts">
const { openLogin, openRegister } = useAuthModal()
</script>

<template>
  <UPage>
    <UPageHero
      headline="Account access"
      title="Auth modal demo"
      description="This template keeps authentication UI as a reusable modal so pages don't have to redirect."
      :links="[
        { label: 'Sign in', color: 'neutral', variant: 'subtle', size: 'lg', onClick: openLogin },
        { label: 'Create account', color: 'primary', size: 'lg', onClick: openRegister },
      ]"
    />

    <UContainer class="pb-20">
      <UCard class="max-w-3xl">
        <div class="space-y-3">
          <div class="text-base font-semibold">
            How to use
          </div>
          <p class="text-sm text-muted">
            Call <code class="rounded bg-muted px-1">useAuthModal().openLogin()</code> or
            <code class="rounded bg-muted px-1">useAuthModal().openRegister()</code> from any component.
          </p>
          <div class="flex gap-3">
            <UButton
              color="neutral"
              variant="subtle"
              @click="openLogin"
            >
              Open sign in
            </UButton>
            <UButton
              color="primary"
              @click="openRegister"
            >
              Open register
            </UButton>
          </div>
        </div>
      </UCard>
    </UContainer>
  </UPage>
</template>
