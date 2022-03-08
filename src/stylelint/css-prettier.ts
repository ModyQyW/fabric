import rules from './rules';
import type { Config } from 'stylelint';

const config: Partial<Config> = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
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
      },
    },
  ],
};

export default config;
