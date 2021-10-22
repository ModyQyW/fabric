import type { Config } from 'stylelint';
import rules from './rules';

const config: Partial<Config> = {
  customSyntax: 'postcss-less',
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...rules.css,
    ...rules.less,
  },
};

export default config;
