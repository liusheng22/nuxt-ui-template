// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // https://typescript-eslint.io/rules/no-explicit-any
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
