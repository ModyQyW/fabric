import type { Linter } from 'eslint';

export const reactRules: Linter.RulesRecord = {
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
          // add miniprogram support
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
};

export const vueRules: Linter.RulesRecord = {
  // too ideal for business
  'vue/multi-word-component-names': 'off',
  'vue/order-in-components': [
    'warn',
    {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        // add miniprogram support
        'onLaunch',
        'onInit',
        'onLoad',
        'onShow',
        'onReady',
        'onHide',
        'onUnload',
        'onError',
        'onUniNViewMessage',
        'onUnhandledRejection',
        'onPageNotFound',
        'onThemeChange',
        'onResize',
        'onPullDownRefresh',
        'onReachBottom',
        'onTabItemTap',
        'onShareAppMessage',
        'onPageScroll',
        'onNavigationBarButtonTap',
        'onBackPress',
        'onNavigationBarSearchInputChanged',
        'onNavigationBarSearchInputConfirmed',
        'onNavigationBarSearchInputClicked',
        'onShareTimeline',
        'onAddToFavorites',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    },
  ],
  // too ideal for business
  'vue-scoped-css/enforce-style-type': 'off',
  // too ideal for business
  '@intlify/vue-i18n/no-raw-text': 'off',
};