import { GLOB_VUE } from '../../constants';
import { hasTypeScript, hasVue3 } from '../../env';
import {
  parserBabel,
  parserTypeScript,
  parserVue,
  pluginVue,
  pluginVueScopedCss,
} from '../plugins';
import type { Config, VueOptions } from '../types';

const vueBaseRules = {
  ...pluginVue.configs.base.rules,
};
const vue3Rules = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs['vue3-essential'].rules,
  ...pluginVue.configs['vue3-strongly-recommended'].rules,
  ...pluginVue.configs['vue3-recommended'].rules,
  ...pluginVueScopedCss.configs['vue3-recommended'].rules,
};
const vue2Rules = {
  ...pluginVue.configs.essential.rules,
  ...pluginVue.configs['strongly-recommended'].rules,
  ...pluginVue.configs.recommended.rules,
  ...pluginVueScopedCss.configs.recommended.rules,
};

export function vue(options: VueOptions = {}): Config[] {
  const { files = [GLOB_VUE], rules = {}, typescriptRules = {} } = options;
  return [
    {
      files,
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: 'latest',
          extraFileExtensions: ['.vue'],
          // @ts-expect-error missing types
          parser: {
            js: parserBabel,
            jsx: parserBabel,
            ts: parserTypeScript,
            tsx: parserTypeScript,
          },
          requireConfigFile: false,
          sourceType: 'module',
        },
      },
      plugins: {
        vue: pluginVue,
        'vue-scoped-css': pluginVueScopedCss,
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...vueBaseRules,
        ...(hasVue3 ? vue3Rules : vue2Rules),
        'vue/attributes-order': [
          'error',
          {
            alphabetical: true,
            order: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              ['UNIQUE', 'SLOT'],
              'TWO_WAY_BINDING',
              'OTHER_DIRECTIVES',
              'OTHER_ATTR',
              'EVENTS',
              'CONTENT',
            ],
          },
        ],
        // too ideal for business
        'vue/multi-word-component-names': 'warn',
        // support miniprogram
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
        ...rules,
        ...(hasTypeScript ? typescriptRules : {}),
      },
    },
  ];
}
