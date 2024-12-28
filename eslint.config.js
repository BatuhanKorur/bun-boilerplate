import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import pluginJs from '@eslint/js'
import pluginTs from 'typescript-eslint'
import pluginStylistic from '@stylistic/eslint-plugin'

export default [
  pluginJs.configs.recommended,
  pluginStylistic.configs['recommended-flat'],
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...pluginTs.configs.recommended,
    },
  },
]
