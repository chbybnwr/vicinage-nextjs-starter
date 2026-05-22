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
      '@stylexjs/no-lookahead-selectors': 'warn',
      '@stylexjs/enforce-extension': 'warn',
    },
  },

  prettierConfig,
])

export default eslintConfig
