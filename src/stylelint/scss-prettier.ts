import type { Config } from 'stylelint';
import rules from './rules';

const config: Partial<Config> = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
    ...rules.scss,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-html',
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended',
      ],
      rules: {
        ...rules.css,
        ...rules.scss,
      },
    },
  ],
};

export default config;
