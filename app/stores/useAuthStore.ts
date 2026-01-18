import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { AuthUser } from '@/types'

type AuthStatus = 'idle' | 'loading' | 'authenticated'

type LoginPayload = {
  email: string
  password: string
}

type RegisterPayload = {
  name: string
  email: string
  password: string
}

const wait = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const status = ref<AuthStatus>('idle')

  const isAuthenticated = computed(() => Boolean(user.value))

  const login = async (payload: LoginPayload) => {
    status.value = 'loading'
    await wait(600)
    user.value = {
      id: crypto.randomUUID(),
      email: payload.email,
    }
    status.value = 'authenticated'
  }

  const register = async (payload: RegisterPayload) => {
    status.value = 'loading'
    await wait(800)
    user.value = {
      id: crypto.randomUUID(),
      name: payload.name,
      email: payload.email,
    }
    status.value = 'authenticated'
  }

  const logout = () => {
    user.value = null
    status.value = 'idle'
  }

  return {
    user,
    status,
    isAuthenticated,
    login,
    register,
    logout,
  }
})
