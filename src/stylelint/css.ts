import type { Config } from 'stylelint';
import rules from './rules';

const config: Partial<Config> = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    ...rules.css,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
      rules: {
        ...rules.css,
      },
    },
  ],
};

export default config;
