import type { Configuration } from 'stylelint';
import rules from './rules';

const config: Partial<Configuration> = {
  extends: [
    'stylelint-config-twbs-bootstrap/css',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
  },
};

export default config;
