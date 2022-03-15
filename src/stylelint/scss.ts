import rules from './rules';
import type { Config } from 'stylelint';

const config: Partial<Config> = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    ...rules.css,
    ...rules.scss,
  },
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
      rules: {
        ...rules.css,
        ...rules.scss,
      },
    },
  ],
};

export default config;
