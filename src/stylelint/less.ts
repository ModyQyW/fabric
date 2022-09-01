import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  customSyntax: 'postcss-less',
  rules: {
    'at-rule-no-unknown': null,
  },
};

export default config;
