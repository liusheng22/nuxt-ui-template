export type AuthModalTab = 'login' | 'register'

type AuthModalState = {
  open: boolean
  tab: AuthModalTab
}

export const useAuthModal = () => {
  const state = useState<AuthModalState>('auth-modal', () => ({
    open: false,
    tab: 'login',
  }))

  const openLogin = () => {
    state.value.tab = 'login'
    state.value.open = true
  }

  const openRegister = () => {
    state.value.tab = 'register'
    state.value.open = true
  }

  const close = () => {
    state.value.open = false
  }

  return {
    state,
    openLogin,
    openRegister,
    close,
  }
}
