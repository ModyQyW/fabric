module.exports = {
  'no-unused-vars':
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
  'react-hooks/exhaustive-deps': [
    'warn',
    {
      additionalHooks: 'useRecoilCallback',
    },
  ],
  'react/jsx-filename-extension': [
    'error',
    { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
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
};
