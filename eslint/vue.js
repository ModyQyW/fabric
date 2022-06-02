require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      parser: 'vue-eslint-parser',
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:testing-library/vue'],
    },
  ],
  parserOptions: {
    extraFileExtensions: ['.cjs', '.mjs', '.cts', '.mts', '.vue'],
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
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
    'vue-scoped-css/enforce-style-type': 'off',
    '@intlify/vue-i18n/no-raw-text': 'off',
  },
  settings: {
    'vue-i18n': {
      localeDir: 'src/locales/**/*.{json,jsonc,json5,yaml,yml}',
      messageSyntaxVersion: '^9.0.0',
    },
  },
};
