module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
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
        ? [
            'warn',
            {
              vars: 'all',
              varsIgnorePattern: '(React|Taro)',
              args: 'after-used',
              ignoreRestSiblings: true,
            },
          ]
        : 'off',
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'onLaunch',
            'onReady',
            'onLoad',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentDidShow',
            'componentDidHide',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatchError',
            'componentDidNotFound',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
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
            ? [
                'warn',
                {
                  vars: 'all',
                  varsIgnorePattern: '(React|Taro)',
                  args: 'after-used',
                  ignoreRestSiblings: true,
                },
              ]
            : 'off',
        'prettier/prettier': 'warn',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/sort-comp': [
          'error',
          {
            order: [
              'static-variables',
              'static-methods',
              'instance-variables',
              'lifecycle',
              '/^on.+$/',
              'getters',
              'setters',
              '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
              'instance-methods',
              'everything-else',
              'rendering',
            ],
            groups: {
              lifecycle: [
                'displayName',
                'propTypes',
                'contextTypes',
                'childContextTypes',
                'mixins',
                'statics',
                'defaultProps',
                'constructor',
                'getDefaultProps',
                'getInitialState',
                'state',
                'getChildContext',
                'getDerivedStateFromProps',
                'onLaunch',
                'onReady',
                'onLoad',
                'componentWillMount',
                'UNSAFE_componentWillMount',
                'componentDidMount',
                'componentDidShow',
                'componentDidHide',
                'componentWillReceiveProps',
                'UNSAFE_componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'UNSAFE_componentWillUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatchError',
                'componentDidNotFound',
                'componentWillUnmount',
              ],
              rendering: ['/^render.+$/', 'render'],
            },
          },
        ],
      },
    },
  ],
};
