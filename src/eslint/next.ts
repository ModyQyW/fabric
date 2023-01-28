import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
};

export default config;
