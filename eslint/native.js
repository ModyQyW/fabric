module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['plugin:unicorn/recommended', 'airbnb-base', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'no-unused-vars':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript/base',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      rules: {
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
        'prettier/prettier': 'warn',
      },
    },
  ],
};
