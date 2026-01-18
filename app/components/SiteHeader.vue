<script setup lang="ts">
const { openLogin, openRegister } = useAuthModal()
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-default/60 bg-default/80 backdrop-blur">
    <UContainer class="flex items-center justify-between gap-6 py-4">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-base font-semibold"
      >
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-inverted">N</span>
        Nuxt UI Template
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-sm md:flex">
        <NuxtLink
          to="/features"
          class="text-muted transition hover:text-highlighted"
        >Features</NuxtLink>
        <NuxtLink
          to="/playground"
          class="text-muted transition hover:text-highlighted"
        >Playground</NuxtLink>
        <NuxtLink
          to="/auth"
          class="text-muted transition hover:text-highlighted"
        >Sign in</NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <UColorModeButton />
        <UButton
          color="neutral"
          variant="ghost"
          @click="openLogin()"
        >
          Sign in
        </UButton>
        <UButton
          color="primary"
          @click="openRegister()"
        >
          Get started
        </UButton>
      </div>
    </UContainer>
  </header>
</template>
