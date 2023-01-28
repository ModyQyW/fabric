import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // add miniprogram support
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
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
            'onLaunch',
            'onLoad',
            'onUnload',
            'onReady',
            'componentDidShow',
            'componentDidHide',
            'onPullDownRefresh',
            'onReachBottom',
            'onPageScroll',
            'onAddToFavorites',
            'onShareAppMessage',
            'onShareTimeline',
            'onResize',
            'onTabItemTap',
            'onSaveExitState',
            'onTitleClick',
            'onOptionMenuClick',
            'onPopMenuClick',
            'onPullIntercept',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        // recoil
        additionalHooks: '(useRecoilCallback|useRecoilTransaction|useRecoilTransaction_UNSTABLE)',
      },
    ],
  },
};

export default config;
