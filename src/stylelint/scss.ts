import type { Configuration } from 'stylelint';
import rules from './rules';

const config: Partial<Configuration> = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
  rules: {
    ...rules.css,
    ...rules.scss,
  },
};

export default config;
