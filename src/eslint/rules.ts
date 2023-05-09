import type { Linter } from 'eslint';
import { enableMiniprogram, enableReact, enableTypeScript } from '../helpers';

export const javascriptRules: Linter.RulesRecord = {
  // should ignore virtual modules
  'import/no-unresolved': [
    'error',
    { ignore: ['^virtual\\:', '^\\~', '^windi\\:', 'windi\\.css', '^uno\\:', 'uno\\.css'] },
  ],
  // organize imports order
  'import/order': 'error',
  // handle by other rules and typescript
  'n/no-missing-import': 'off',
  // ignore some files only
  'unicorn/filename-case': [
    'error',
    {
      case: 'kebabCase',
      ignore: [
        // README.md, CHANGELOG.md, README.zh-CN.md
        '\\.md$',
        // index.jsx, Index.jsx, .etc
        '^[Ii]ndex',
        // app.jsx, App.jsx, .etc
        '^[Aa]pp',
        // index.jsx, Index.jsx, .etc
        '\\.[jt]sx$',
        // useCssVar, useDark, .etc
        '^use',
        // [...all].jsx, [...slug].jsx, users-[group].jsx, [[...slug]].jsx, .etc
        '\\[.*\\]',
      ],
    },
  ],
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
};

export const typescriptRules: Linter.RulesRecord = {
  ...javascriptRules,
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
  // https://github.com/typescript-eslint/typescript-eslint/blob/v5.59.5/packages/eslint-plugin/src/configs/eslint-recommended.ts
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
};

export const reactRules: Linter.RulesRecord = {
  ...(enableTypeScript ? typescriptRules : javascriptRules),
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
};

export const vueRules: Linter.RulesRecord = {
  ...(enableTypeScript ? typescriptRules : javascriptRules),
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
