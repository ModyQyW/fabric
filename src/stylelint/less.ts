import rules from './rules';
import type { Config } from 'stylelint';

const config: Partial<Config> = {
  customSyntax: 'postcss-less',
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    ...rules.css,
    ...rules.less,
  },
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
      rules: {
        ...rules.css,
        ...rules.less,
      },
    },
  ],
};

export default config;
