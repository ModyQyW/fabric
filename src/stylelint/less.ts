import type { Config } from 'stylelint';
import rules from './rules';

const config: Partial<Config> = {
  customSyntax: 'postcss-less',
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    ...rules.css,
    ...rules.less,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
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
