import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { hasVite } from '../../env';
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
        ...pluginReact.configs.recommended.rules,
        ...pluginReact.configs['jsx-runtime'].rules,
        ...pluginReactHooks.configs.recommended.rules,
        ...pluginReactPerf.configs.recommended.rules,
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
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: hasVite },
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
