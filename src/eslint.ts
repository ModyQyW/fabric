import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';
import getDebug from 'debug';
import {
  enableTypescript,
  enableNuxt,
  enableVue,
  enableVue3,
  enableVueI18n,
  enableNext,
  enableReactNative,
  enableReact,
  enableMiniprogram,
  enablePrettier,
} from './helpers';

const debug = getDebug('@modyqyw/fabric/eslint');

debug('JavaScript config enabled.');
if (enableTypescript) debug('TypeScript config enabled.');
debug('JSON config enabled.');
debug('YAML config enabled.');
if (enableVue) {
  if (enableVue3) debug('Vue3 config enabled.');
  else debug('Vue2 config enabled.');
}
if (enableNuxt) debug('Nuxt config enabled.');
if (enableReact) debug('React config enabled.');
if (enableReactNative) debug('ReactNative config enabled.');
if (enableNext) debug('Next config enabled.');
if (enableMiniprogram) debug('miniprogram config enabled.');
if (enablePrettier) debug('prettier config enabled.');

const baseParser = 'espree';
const baseParserOptions: Linter.ParserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  ecmaFeatures: { globalReturn: false, jsx: true },
};
const typescriptSettings = {
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
};
const typescriptParser = '@typescript-eslint/parser';
const typescriptRules: Linter.RulesRecord = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/v5.49.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
  'constructor-super': 'off', // ts(2335) & ts(2377)
  'getter-return': 'off', // ts(2378)
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-func-assign': 'off', // ts(2539)
  'no-import-assign': 'off', // ts(2539) & ts(2540)
  'no-new-symbol': 'off', // ts(7009)
  'no-obj-calls': 'off', // ts(2349)
  'no-redeclare': 'off', // ts(2451)
  'no-setter-return': 'off', // ts(2408)
  'no-this-before-super': 'off', // ts(2376)
  'no-undef': 'off', // ts(2304)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
  'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
  'prefer-const': 'error', // ts provides better types with const
  'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
  'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
  'valid-typeof': 'off', // ts(2367)
  // allow for usage
  '@typescript-eslint/no-empty-interface': 'off',
  // better not to use any
  // but the truth is, you have no way to get rid of it
  '@typescript-eslint/no-explicit-any': 'off',
  // TypeScript provides the same checks as part of standard type checking
  'import/named': 'off',
  'import/namespace': 'off',
  'import/default': 'off',
  'import/no-named-as-default-member': 'off',
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
    enablePrettier ? 'plugin:prettier/recommended' : '',
  ].filter((item) => !!item),
  settings: {
    'import/core-modules': ['electron'],
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '\\.(scss|css|svg|json)$'],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.jsx', '.json'] },
    },
  },
  parser: baseParser,
  parserOptions: { ...baseParserOptions },
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
    // handle by other rules
    'unicorn/no-abusive-eslint-disable': 'off',
    // not agree
    'unicorn/no-null': 'off',
    // too ideal for library
    'unicorn/no-thenable': 'off',
    // too ideal for library
    'unicorn/prefer-top-level-await': 'off',
    // too ideal for business
    'unicorn/prevent-abbreviations': 'off',
    // too ideal
    'sonarjs/no-duplicate-string': 'off',
    ...(enableMiniprogram
      ? {
          'unicorn/prefer-array-flat-map': 'off',
          'unicorn/prefer-array-flat': 'off',
          'unicorn/prefer-at': 'off',
          'unicorn/prefer-object-from-entries': 'off',
          'unicorn/prefer-optional-catch-binding': 'off',
          'unicorn/prefer-string-replace-all': 'off',
          'unicorn/prefer-string-trim-start-end': 'off',
        }
      : {}),
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
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      settings: { ...typescriptSettings },
      parser: typescriptParser,
      parserOptions: { ...baseParserOptions },
      rules: { ...typescriptRules },
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
        enableReact ? 'plugin:react/recommended' : '',
        enableReact ? 'plugin:react/jsx-runtime' : '',
        enableReact ? 'plugin:react-hooks/recommended' : '',
        enableReact && !enableMiniprogram ? 'plugin:jsx-a11y/recommended' : '',
        enableReactNative ? 'plugin:react-native/all' : '',
        enableReactNative ? 'plugin:react-native-a11y/all' : '',
        enableNext ? 'next/core-web-vitals' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      rules: {
        ...(enableReact
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
        enableTypescript ? 'plugin:@typescript-eslint/recommended' : '',
        enableTypescript ? 'plugin:import/typescript' : '',
        enableVue3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended',
        enableVue3 ? 'plugin:vue-scoped-css/vue3-recommended' : 'plugin:vue-scoped-css/recommended',
        enableVueI18n ? 'plugin:@intlify/vue-i18n/recommended' : '',
        enableMiniprogram ? '' : 'plugin:vuejs-accessibility/recommended',
        enableNuxt ? 'plugin:nuxt/recommended' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      settings: {
        ...(enableTypescript ? typescriptSettings : {}),
        ...(enableVueI18n
          ? {
              'vue-i18n': {
                localeDir: 'src/locales/**/*.{json,jsonc,json5,yaml,yml}',
                messageSyntaxVersion: enableVue3 ? '^9.0.0' : '^8.0.0',
              },
            }
          : {}),
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        ...baseParserOptions,
        parser: {
          js: baseParser,
          jsx: baseParser,
          ts: typescriptParser,
          tsx: typescriptParser,
        },
      },
      rules: {
        ...(enableTypescript ? typescriptRules : {}),
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
      },
    },
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      extends: [
        'plugin:jsonc/recommended-with-jsonc',
        enablePrettier ? 'plugin:jsonc/prettier' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      parser: 'jsonc-eslint-parser',
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: [
        'plugin:yml/standard',
        enablePrettier ? 'plugin:yml/prettier' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      parser: 'yaml-eslint-parser',
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['**/*.md'],
      extends: [
        'plugin:markdown/recommended',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
    },
    {
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'unicorn/prefer-module': 'off',
        'n/no-missing-require': 'off',
        'n/no-missing-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-unpublished-bin': 'off',
        'n/no-unpublished-require': 'off',
        'n/no-unpublished-import': 'off',
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
    'generated',
    'node_modules',
    'out',
    'output',
    'package-lock.json',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'tmp',
    'typed-router.d.ts',
    'unpackage',
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
  root: true,
};

export default config;
