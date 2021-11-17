import type { Configuration } from 'stylelint';
import rules from './rules';

const config: Partial<Configuration> = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
    ...rules.scss,
  },
};

export default config;
