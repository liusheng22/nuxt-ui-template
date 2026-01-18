/**
 * Template types for common app concerns.
 */

export type ThemeMode = 'system' | 'light' | 'dark'

export type NavLink = {
  label: string
  to: string
  external?: boolean
}

export type FeatureItem = {
  title: string
  description: string
  icon?: string
}

export type AuthUser = {
  id: string
  email: string
  name?: string
}
