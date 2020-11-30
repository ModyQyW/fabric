const commonRules = require('./common');

module.exports = {
  ...commonRules,
  '@typescript-eslint/no-console':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  '@typescript-eslint/no-debugger':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  '@typescript-eslint/no-unused-vars':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  'no-console': 'off',
  'no-debugger': 'off',
  'no-unused-vars': 'off',
};
