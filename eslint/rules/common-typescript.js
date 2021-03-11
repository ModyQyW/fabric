const commonRules = require('./common');

module.exports = {
  ...commonRules,
  '@typescript-eslint/no-unused-vars':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  'no-unused-vars': 'off',
};
