const commonRules = require('./rules/common');

module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...commonRules,
  },
};
