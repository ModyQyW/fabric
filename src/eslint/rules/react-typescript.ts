import reactRules from './react';

export default {
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
