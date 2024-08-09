import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { hasVite, hasRemix } from '../../env';
import {
  pluginReact,
  pluginReactHooks,
  pluginReactPerf,
  pluginReactRefresh,
} from '../plugins';
import type { Config, ReactOptions } from '../types';

export function react(options: ReactOptions = {}): Config[] {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    rules = {},
    typescriptFiles = [GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      files,
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks,
        'react-perf': pluginReactPerf,
        'react-refresh': pluginReactRefresh,
      },
      rules: {
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.35.0/index.js
        'react/display-name': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 0,
        'react/prop-types': 'error',
        'react/require-render-return': 'error',
        'react/sort-comp': [
          'error',
          {
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
                // support miniprogram
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
          },
        ],

        // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        // eslint-plugin-react-hooks v4.6.2
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // https://github.com/cvazac/eslint-plugin-react-perf/tree/35e9912004da57880939edd4a1ca202740157c66
        // eslint-plugin-react-perf v3.3.2
        'react-perf/jsx-no-new-object-as-prop': 'error',
        'react-perf/jsx-no-new-array-as-prop': 'error',
        'react-perf/jsx-no-new-function-as-prop': 'error',

        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/v0.4.9
        'react-refresh/only-export-components': [
          'warn',
          {
            allowExportNames: hasRemix
              ? ['meta', 'links', 'headers', 'loader', 'action']
              : [],
            allowConstantExport: hasVite,
          },
        ],

        ...rules,
      },
    },
    {
      files: typescriptFiles,
      rules: {
        'react/jsx-no-undef': 'off',

        ...typescriptRules,
      },
    },
  ];
}
