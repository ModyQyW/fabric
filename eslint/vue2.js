module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    mocha: true,
    node: true,
  },
  globals: {
    plus: 'readonly',
    uni: 'readonly',
    weex: 'readonly',
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
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
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    'no-unused-vars':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'prettier/prettier': 'warn',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
    'import/resolver': {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396
      [require.resolve('eslint-import-resolver-node')]: {},
      [require.resolve('eslint-import-resolver-webpack')]: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
};
