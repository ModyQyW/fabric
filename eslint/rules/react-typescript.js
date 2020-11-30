const reactRules = require('./react');

module.exports = {
  ...reactRules,
  '@typescript-eslint/no-unused-vars':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? [
          'warn',
          {
            varsIgnorePattern: 'React',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ]
      : 'off',
  'no-unused-vars': 'off',
};
