// eslint.config.js
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: (await import('eslint-plugin-prettier')).default,
      react: (await import('eslint-plugin-react')).default
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-empty': 0,
      '@typescript-eslint/no-explicit-any': 1,
      'no-debugger': 1,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-explicit-any': 0
    },
    ignores: ['dist/']
  }
]
