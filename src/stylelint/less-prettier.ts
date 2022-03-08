import rules from './rules';
import type { Config } from 'stylelint';

const config: Partial<Config> = {
  customSyntax: 'postcss-less',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
    ...rules.less,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended',
      ],
      rules: {
        ...rules.css,
        ...rules.less,
      },
    },
  ],
};

export default config;
