module.exports = {
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:vue/recommended',
        'plugin:vue-scoped-css/recommended',
        'plugin:@intlify/vue-i18n/recommended',
        'plugin:vuejs-accessibility/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
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
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.mts', '.ts', '.tsx'],
        },
        'import/resolver': {
          node: {
            extensions: ['.mjs', '.js', '.json', '.mts', '.ts'],
          },
          typescript: {},
        },
        'vue-i18n': {
          localeDir: 'src/locales/*.{json,json5,yaml,yml}',
          messageSyntaxVersion: '^8.0.0',
        },
      },
    },
    {
      files: ['shims-jsx.d.ts', 'shims-tsx.d.ts', 'shims-vue.d.ts', 'env.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:testing-library/vue'],
    },
  ],
};
