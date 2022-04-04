import rules from './rules';
import type { Config } from 'stylelint';

const config: Partial<Config> = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
  },
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: [
        'stylelint-config-recommended',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended',
      ],
      rules: {
        ...rules.css,
      },
    },
  ],
};

export default config;
