const commonRules = require('./common');

module.exports = {
  ...commonRules,
  '@typescript-eslint/no-unused-vars': 'warn',
  'no-unused-vars': 'off',
};
