import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier-scss'],
  rules: {
    // tailwindcss
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'value', 'layer'],
      },
    ],
    // scss
    'annotation-no-unknown': [true, { ignoreAnnotations: 'default' }],
  },
};

export default config;
