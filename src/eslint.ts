import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';
import { hasNuxt, hasVue3, hasNext, hasReactNative, hasReact, hasMiniprogram } from './helpers';

// disable a11y for miniprogram
const miniprogramRules: Linter.RulesRecord = {
  'jsx-a11y/accessible-emoji': 'off',
  'jsx-a11y/alt-text': 'off',
  'jsx-a11y/anchor-ambiguous-text': 'off',
  'jsx-a11y/anchor-has-content': 'off',
  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
  'jsx-a11y/aria-props': 'off',
  'jsx-a11y/aria-proptypes': 'off',
  'jsx-a11y/aria-role': 'off',
  'jsx-a11y/aria-unsupported-elements': 'off',
  'jsx-a11y/autocomplete-valid': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/control-has-associated-label': 'off',
  'jsx-a11y/heading-has-content': 'off',
  'jsx-a11y/html-has-lang': 'off',
  'jsx-a11y/iframe-has-title': 'off',
  'jsx-a11y/img-redundant-alt': 'off',
  'jsx-a11y/interactive-supports-focus': 'off',
  'jsx-a11y/label-has-associated-control': 'off',
  'jsx-a11y/label-has-for': 'off',
  'jsx-a11y/lang': 'off',
  'jsx-a11y/media-has-caption': 'off',
  'jsx-a11y/mouse-events-have-key-events': 'off',
  'jsx-a11y/no-access-key': 'off',
  'jsx-a11y/no-aria-hidden-on-focusable': 'off',
  'jsx-a11y/no-autofocus': 'off',
  'jsx-a11y/no-distracting-elements': 'off',
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
  'jsx-a11y/no-noninteractive-tabindex': 'off',
  'jsx-a11y/no-onchange': 'off',
  'jsx-a11y/no-redundant-roles': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'jsx-a11y/prefer-tag-over-role': 'off',
  'jsx-a11y/role-has-required-aria-props': 'off',
  'jsx-a11y/role-supports-aria-props': 'off',
  'jsx-a11y/scope': 'off',
  'jsx-a11y/tabindex-no-positive': 'off',
  'vuejs-accessibility/alt-text': 'off',
  'vuejs-accessibility/anchor-has-content': 'off',
  'vuejs-accessibility/aria-props': 'off',
  'vuejs-accessibility/aria-role': 'off',
  'vuejs-accessibility/aria-unsupported-elements': 'off',
  'vuejs-accessibility/click-events-have-key-events': 'off',
  'vuejs-accessibility/form-control-has-label': 'off',
  'vuejs-accessibility/heading-has-content': 'off',
  'vuejs-accessibility/iframe-has-title': 'off',
  'vuejs-accessibility/interactive-supports-focus': 'off',
  'vuejs-accessibility/label-has-for': 'off',
  'vuejs-accessibility/media-has-caption': 'off',
  'vuejs-accessibility/mouse-events-have-key-events': 'off',
  'vuejs-accessibility/no-access-key': 'off',
  'vuejs-accessibility/no-autofocus': 'off',
  'vuejs-accessibility/no-distracting-elements': 'off',
  'vuejs-accessibility/no-onchange': 'off',
  'vuejs-accessibility/no-redundant-roles': 'off',
  'vuejs-accessibility/no-static-element-interactions': 'off',
  'vuejs-accessibility/role-has-required-aria-props': 'off',
  'vuejs-accessibility/tabindex-no-positive': 'off',
};

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/core-modules': ['electron'],
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '\\.(scss|css|svg|json)$'],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.jsx', '.json'] },
    },
  },
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    // should ignore virtual modules
    'import/no-unresolved': [
      'error',
      { ignore: ['^virtual\\:', '^\\~', '^windi\\:', 'windi\\.css', '^uno\\:', 'uno\\.css'] },
    ],
    // organize imports order
    'import/order': 'error',
    // handle by other rules or typescript
    'n/no-missing-import': 'off',
    // preserve
    'unicorn/filename-case': 'off',
    // not agree
    'unicorn/no-null': 'off',
    // consider confusing abbreviations
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: {
            err: true,
            error: true,
            ev: true,
            evt: true,
            event: true,
          },
          r: {
            response: true,
            result: true,
          },
          res: {
            response: true,
            result: true,
          },
        },
      },
    ],
    // too strict
    'sonarjs/no-duplicate-string': 'off',
  },
  overrides: [
    {
      // just let eslint check these files
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx'],
    },
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx', '*.d.ts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      settings: {
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts', '.json'],
          },
          typescript: {
            extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts', '.json'],
          },
        },
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      rules: {
        // better not to use any
        // but the truth is, you have no way to get rid of it
        '@typescript-eslint/no-explicit-any': 'warn',
        // TypeScript provides the same checks as part of standard type checking
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
      },
    },
    {
      files: ['scripts/**/*', 'cli.*'],
      rules: {
        // allow console in scripts
        // but recommend to use a logger like winston, consola, pino, etc.
        'no-console': 'off',
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        hasReact ? 'plugin:react/recommended' : '',
        hasReact ? 'plugin:react/jsx-runtime' : '',
        hasReact ? 'plugin:react-hooks/recommended' : '',
        hasReact ? 'plugin:jsx-a11y/recommended' : '',
        hasReactNative ? 'plugin:react-native/all' : '',
        hasReactNative ? 'plugin:react-native-a11y/all' : '',
        hasNext ? 'next/core-web-vitals' : '',
        'plugin:prettier/recommended',
      ].filter((item) => !!item),
      rules: {
        ...(hasMiniprogram ? { ...miniprogramRules } : {}),
        ...(hasReact
          ? {
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
                  additionalHooks:
                    '(useRecoilCallback|useRecoilTransaction|useRecoilTransaction_UNSTABLE)',
                },
              ],
            }
          : {}),
      },
    },
    {
      files: ['*.vue'],
      extends: [
        hasVue3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended',
        hasVue3 ? 'plugin:vue-scoped-css/vue3-recommended' : 'plugin:vue-scoped-css/recommended',
        'plugin:@intlify/vue-i18n/recommended',
        'plugin:vuejs-accessibility/recommended',
        hasNuxt ? 'plugin:nuxt/recommended' : '',
        'plugin:prettier/recommended',
      ].filter((item) => !!item),
      settings: {
        'vue-i18n': {
          localeDir: 'src/locales/**/*.{json,jsonc,json5,yaml,yml}',
          messageSyntaxVersion: hasVue3 ? '^9.0.0' : '^8.0.0',
        },
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        parser: {
          js: 'espree',
          ts: '@typescript-eslint/parser',
        },
      },
      rules: {
        ...(hasMiniprogram ? miniprogramRules : {}),
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
        'vue-scoped-css/enforce-style-type': 'off',
        '@intlify/vue-i18n/no-raw-text': 'off',
      },
    },
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      extends: [
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:jsonc/prettier',
        'plugin:prettier/recommended',
      ],
      parser: 'jsonc-eslint-parser',
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: ['plugin:yml/standard', 'plugin:yml/prettier', 'plugin:prettier/recommended'],
      parser: 'yaml-eslint-parser',
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
  ],
  ignorePatterns: [
    '!.github',
    '!.vitepress',
    '!.vscode',
    '*.min.*',
    '.cache',
    '.git',
    '.hbuilder',
    '.hbuilderx',
    '.next',
    '.nitro',
    '.npm',
    '.nuxt',
    '.out',
    '.output',
    '.rax',
    '.temp',
    '.tmp',
    '.umi',
    'CHANGELOG.md',
    'LICENSE',
    'LICENSE*',
    '__snapshots__',
    'androidPrivacy.json',
    'auto-imports.d.ts',
    'cache',
    'components.d.ts',
    'coverage',
    'dist',
    'dist*',
    'node_modules',
    'out',
    'output',
    'package-lock.json',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'tmp',
    'yarn.lock',
  ],
  globals: {
    __dirname: false,
    __filename: false,
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
    dd: 'readonly', // https://open.dingtalk.com/
    jd: 'readonly', // https://mp.jd.com/
    ks: 'readonly', // https://mp.kuaishou.com/
    my: 'readonly', // https://opendocs.alipay.com/mini
    plus: 'readonly', // http://www.html5plus.org/doc/h5p.html
    qh: 'readonly', // https://mp.360.cn/
    qq: 'readonly', // https://q.qq.com/
    swan: 'readonly', // https://smartprogram.baidu.com/docs
    tt: 'readonly', // https://developer.open-douyin.com/ https://open.feishu.cn/
    uni: 'readonly', // https://uniapp.dcloud.io/
    weex: 'readonly', // https://weex.apache.org/
    wx: 'readonly', // https://developers.weixin.qq.com/miniprogram/dev/framework/
  },
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
};

export default config;
