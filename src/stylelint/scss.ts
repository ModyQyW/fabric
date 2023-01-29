import type { Config } from 'stylelint';

const config: Config = {
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
