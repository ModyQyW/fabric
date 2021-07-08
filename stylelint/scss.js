const commonRules = require('./rules/common');

module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...commonRules,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        // for @tailwind
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
