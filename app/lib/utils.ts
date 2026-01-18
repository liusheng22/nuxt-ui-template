/**
 * Tiny shared utilities for the template.
 * Keep this folder small and dependency-free; prefer framework helpers when possible.
 */

export const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export const isBrowser = () => typeof window !== 'undefined'

export const toArray = <T>(value: T | T[] | null | undefined): T[] => {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

export const invariant = (condition: unknown, message = 'Invariant violation'): asserts condition => {
  if (!condition) {
    throw new Error(message)
  }
}
