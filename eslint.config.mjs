import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import vicinage from '@vicinage/eslint-plugin'
import stylex from '@stylexjs/eslint-plugin'
import prettierConfig from 'eslint-config-prettier/flat'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  vicinage.configs.recommended,

  {
    plugins: {
      '@stylexjs': stylex,
    },
    rules: {
      '@stylexjs/no-conflicting-props': 'error',
      '@stylexjs/no-nonstandard-styles': 'error',
      '@stylexjs/no-legacy-contextual-styles': 'error',
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/valid-shorthands': 'warn',
      '@stylexjs/sort-keys': 'warn',
      '@stylexjs/no-lookahead-selectors': 'warn',
      '@stylexjs/enforce-extension': 'warn',
      '@stylexjs/no-unused': 'off',
    },
  },

  prettierConfig,
])

export default eslintConfig
