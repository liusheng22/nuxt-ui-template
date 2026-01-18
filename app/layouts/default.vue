<template>
  <div class="min-h-screen bg-default text-default">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
    <AuthModal />
  </div>
</template>
