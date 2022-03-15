import rules from './rules';
import type { Config } from 'stylelint';

const config: Partial<Config> = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    ...rules.css,
  },
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
      rules: {
        ...rules.css,
      },
    },
  ],
};

export default config;
