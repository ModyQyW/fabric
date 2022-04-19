module.exports = {
  extends: [
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
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
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentDidShow',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentDidCatchError',
            'componentDidNotFound',
            'componentDidHide',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction|useRecoilTransaction_UNSTABLE)',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.web.js', '.ios.js', '.android.js', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.cts', '*.mts', '*.tsx', '**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:functional/external-recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
      },
      settings: {
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.mts', '.ts', '.tsx'],
        },
        'import/resolver': {
          node: {
            extensions: [
              '.mjs',
              '.js',
              '.web.js',
              '.ios.js',
              '.android.js',
              '.json',
              '.mts',
              '.ts',
              '.web.ts',
              '.ios.ts',
              '.android.ts',
            ],
          },
          typescript: {},
        },
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
