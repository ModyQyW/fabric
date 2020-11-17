module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
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
          'state',
          'acc',
          'accumulator',
          'e',
          'err',
          'error',
          'event',
          'r',
          'res',
          'result',
          'response',
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
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
        ignore: ['.jsx$', '.tsx$', '.vue$'],
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        extendDefaultReplacements: false,
        replacements: {
          dest: {
            destination: true,
          },
          dir: {
            direction: true,
            directory: true,
          },
          dirs: {
            directories: true,
          },
          doc: {
            document: true,
          },
          docs: {
            documentation: true,
            documents: true,
          },
          e: {
            err: true,
            error: true,
            ev: true,
            evt: true,
            event: true,
          },
          mod: {
            module: true,
          },
          rel: {
            related: true,
            relationship: true,
            relative: true,
          },
          res: {
            response: true,
            result: true,
          },
          ret: {
            returnValue: true,
          },
          retVal: {
            returnValue: true,
          },
          sep: {
            separator: true,
          },
          stdDev: {
            standardDeviation: true,
          },
          tbl: {
            table: true,
          },
          tit: {
            title: true,
          },
        },
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
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
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
