// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * https://typescript-eslint.io/packages/typescript-eslint#config
 * 
 * This config is manually configuring the plugin for ts-eslint as
 * well as the parser. This comes from the advanced notes from the
 * following:
 * 
 * https://typescript-eslint.io/packages/typescript-eslint#advanced-usage
 * 
 */
export default tseslint.config(
  {
    files: ['**/*.ts'],
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/dist/**'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module'
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    rules: {
      "comma-spacing": "off",
      "@typescript-eslint/comma-spacing": "error",
    },
  },
  {
    // disable type-aware linting on JS files
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
);