const commonRules = require('./rules/common');

module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/css',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...commonRules,
  },
};
