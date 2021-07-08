const reactRules = require('./react');

module.exports = {
  ...reactRules,
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      varsIgnorePattern: 'React',
      args: 'after-used',
      ignoreRestSiblings: true,
    },
  ],
  'no-unused-vars': 'off',
};
