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
  ...pluginVue.configs['vue3-essential'].rules,
  ...pluginVue.configs['vue3-strongly-recommended'].rules,
  ...pluginVue.configs['vue3-recommended'].rules,
  ...pluginVueScopedCss.configs['vue3-recommended'].rules,
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],
  'vue/component-api-style': [
    'error',
    ['script-setup', 'composition', 'composition-vue2', 'options'],
  ],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/define-emits-declaration': 'error',
  'vue/define-macros-order': [
    'error',
    {
      defineExposeLast: true,
      order: [
        'defineOptions',
        'defineModel',
        'defineProps',
        'defineEmits',
        'defineSlots',
      ],
    },
  ],
  'vue/define-props-declaration': ['error', 'type-based'],
  'vue/no-required-prop-with-default': 'error',
  'vue/prefer-define-options': 'error',
  'vue/require-macro-variable-name': 'error',
  'vue/valid-define-options': 'error',
  'vue-scoped-css/no-deprecated-v-enter-v-leave-class': 'error',
  'vue-scoped-css/v-deep-pseudo-style': ['error', ':deep'],
  'vue-scoped-css/v-global-pseudo-style': ['error', ':global'],
  'vue-scoped-css/v-slotted-pseudo-style': ['error', ':slotted'],
};
const vue2Rules = {
  ...pluginVue.configs.essential.rules,
  ...pluginVue.configs['strongly-recommended'].rules,
  ...pluginVue.configs.recommended.rules,
  ...pluginVueScopedCss.configs.recommended.rules,
  'vue/block-order': [
    'error',
    {
      order: ['template', 'script', 'style'],
    },
  ],
  'vue/component-api-style': ['error', ['script-setup', 'composition']],
  'vue/custom-event-name-casing': ['error', 'kebab-case'],
  'vue/v-if-else-key': 'warn',
  'vue-scoped-css/v-deep-pseudo-style': ['error', '::v-deep'],
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
        'vue/multi-word-component-names': 'off',
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
              'slots',
              'expose',
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
        // Uncategorized
        'vue/block-tag-newline': [
          'error',
          {
            multiline: 'always',
            singleline: 'always',
          },
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/enforce-style-attribute': [
          'error',
          { allow: ['scoped', 'module'] },
        ],
        'vue/next-tick-style': ['error', 'promise'],
        'vue/no-boolean-default': ['error', 'default-false'],
        'vue/no-deprecated-model-definition': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-ref-object-reactivity-loss': 'warn',
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-root-v-if': 'error',
        'vue/no-setup-props-reactivity-loss': 'warn',
        'vue/no-unused-emit-declarations': 'error',
        'vue/no-unused-properties': 'warn',
        'vue/no-unused-refs': 'warn',
        'vue/no-use-v-else-with-v-for': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/prefer-prop-type-boolean-first': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/require-emit-validator': 'error',
        'vue/require-explicit-slots': 'error',
        'vue/require-name-property': 'error',
        'vue/require-typed-object-prop': 'error',
        'vue/require-typed-ref': 'error',
        'vue-scoped-css/require-selector-used-inside': 'error',
        ...rules,
        ...(hasTypeScript ? typescriptRules : {}),
      },
    },
  ];
}
