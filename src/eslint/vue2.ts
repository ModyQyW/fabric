import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';
import vueConfig from './vue';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          js: 'espree',
          ts: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.json', '.jsonc', '.json5', '.yml', '.yaml'],
      },
    },
  ],
  extends: [
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...vueConfig.rules,
  },
  settings: {
    'vue-i18n': {
      localeDir: 'src/locales/**/*.{json,jsonc,json5,yaml,yml}',
      messageSyntaxVersion: '^8.0.0',
    },
  },
};

export default config;
