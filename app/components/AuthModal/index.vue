<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import type { AuthModalTab } from '@/composables/useAuthModal'

const authStore = useAuthStore()
const { state, close } = useAuthModal()

const tabs = [
  { label: 'Sign in', value: 'login' },
  { label: 'Create account', value: 'register' },
] as const

type TabsItem = (typeof tabs)[number]

const loginFields = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true },
]

const registerFields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Ada Lovelace', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true },
]

const handleLogin = async (event: FormSubmitEvent<Record<string, unknown>>) => {
  const email = String(event.data.email ?? '')
  const password = String(event.data.password ?? '')
  await authStore.login({
    email,
    password,
  })
  close()
}

const handleRegister = async (event: FormSubmitEvent<Record<string, unknown>>) => {
  const name = String(event.data.name ?? '')
  const email = String(event.data.email ?? '')
  const password = String(event.data.password ?? '')
  await authStore.register({
    name,
    email,
    password,
  })
  close()
}

const handleTabChange = (value: string | number) => {
  state.value.tab = String(value) as AuthModalTab
}
</script>

<template>
  <UModal v-model:open="state.open">
    <template #content>
      <UCard class="w-full max-w-xl">
        <div class="space-y-2">
          <div class="text-lg font-semibold">
            Welcome
          </div>
          <p class="text-sm text-muted">
            Sign in or create a new account to demo the template.
          </p>
        </div>

        <div class="mt-6">
          <UTabs
            :items="tabs as unknown as TabsItem[]"
            class="w-full"
            :model-value="state.tab"
            @update:model-value="handleTabChange"
          >
            <template #content="{ item }">
              <div class="mt-4">
                <UAuthForm
                  v-if="item.value === 'login'"
                  title="Sign in"
                  description="Use any email address to simulate a login."
                  :fields="loginFields"
                  :submit="{ label: 'Sign in' }"
                  :loading="authStore.status === 'loading'"
                  :on-submit="handleLogin"
                />
                <UAuthForm
                  v-else
                  title="Create account"
                  description="This is a local demo; no real sign up happens."
                  :fields="registerFields"
                  :submit="{ label: 'Create account' }"
                  :loading="authStore.status === 'loading'"
                  :on-submit="handleRegister"
                />
              </div>
            </template>
          </UTabs>

          <UAlert
            v-if="authStore.user"
            class="mt-6"
            color="success"
            title="Signed in"
            :description="`Welcome, ${authStore.user.name ?? authStore.user.email}`"
          />
        </div>
      </UCard>
    </template>
  </UModal>
</template>
