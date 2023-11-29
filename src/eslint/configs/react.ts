import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { hasVite } from '../../env';
import { pluginReact, pluginReactHooks, pluginReactRefresh } from '../plugins';
import type { Config, Rules } from '../types';

export function react({
  rules = {},
  typescriptRules = {},
}: { rules?: Rules; typescriptRules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks,
        'react-refresh': pluginReactRefresh,
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReact.configs['jsx-runtime'].rules,
        ...pluginReactHooks.configs.recommended.rules,
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
      files: [GLOB_TSX],
      rules: {
        'react/jsx-no-undef': 'off',
        ...typescriptRules,
      },
    },
  ];
}
