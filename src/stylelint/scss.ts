import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier-scss'],
  rules: {
    // tailwindcss
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'value', 'layer', 'config'],
      },
    ],
  },
};

export default config;
