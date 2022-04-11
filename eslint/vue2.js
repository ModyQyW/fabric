module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
      extends: [
        'plugin:vue/recommended',
        'plugin:vue-scoped-css/recommended',
        'plugin:@intlify/vue-i18n/recommended',
        'plugin:vuejs-accessibility/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'vue/multi-word-component-names': [
          'warn',
          {
            ignores: ['[...all]'],
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
      },
      settings: {
        'vue-i18n': {
          localeDir: 'src/locales/*.{json,json5,yaml,yml}',
          messageSyntaxVersion: '^8.0.0',
        },
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:testing-library/vue'],
    },
  ],
};
