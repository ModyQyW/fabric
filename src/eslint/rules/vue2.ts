export default {
  'import/extensions': [
    'error',
    'always',
    {
      mjs: 'never',
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
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
        'onLaunch',
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
  'vuejs-accessibility/click-events-have-key-events': 'off',
};