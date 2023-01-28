import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:nuxt/recommended', 'plugin:prettier/recommended'],
};

export default config;
