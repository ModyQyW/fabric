module.exports = {
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
  },
};
