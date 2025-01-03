import { GLOB_VUE } from "../../constants.ts";
import { hasTypeScript, hasVue3, hasMiniProgram } from "../../env.ts";
import {
  parserBabel,
  parserTypeScript,
  parserVue,
  pluginVue,
  pluginVueScopedCss,
} from "../plugins.ts";
import type { Config, Rules, VueOptions } from "../types.ts";

const vueBaseRules: Rules = {
  // https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/base.js
  "vue/comment-directive": "error",
  "vue/jsx-uses-vars": "error",
};

const vue3Rules: Rules = {
  // https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/vue3-essential.js
  // 'vue/multi-word-component-names': 'error', // Too ideal for business.
  "vue/multi-word-component-names": "warn",
  "vue/no-arrow-functions-in-watch": "error",
  "vue/no-async-in-computed-properties": "error",
  "vue/no-child-content": "error",
  "vue/no-computed-properties-in-data": "error",
  "vue/no-deprecated-data-object-declaration": "error",
  "vue/no-deprecated-destroyed-lifecycle": "error",
  "vue/no-deprecated-dollar-listeners-api": "error",
  "vue/no-deprecated-dollar-scopedslots-api": "error",
  "vue/no-deprecated-events-api": "error",
  "vue/no-deprecated-filter": "error",
  "vue/no-deprecated-functional-template": "error",
  "vue/no-deprecated-html-element-is": "error",
  "vue/no-deprecated-inline-template": "error",
  "vue/no-deprecated-props-default-this": "error",
  "vue/no-deprecated-router-link-tag-prop": "error",
  "vue/no-deprecated-scope-attribute": "error",
  "vue/no-deprecated-slot-attribute": "error",
  "vue/no-deprecated-slot-scope-attribute": "error",
  "vue/no-deprecated-v-bind-sync": "error",
  "vue/no-deprecated-v-is": "error",
  "vue/no-deprecated-v-on-native-modifier": "error",
  "vue/no-deprecated-v-on-number-modifiers": "error",
  "vue/no-deprecated-vue-config-keycodes": "error",
  "vue/no-dupe-keys": "error",
  "vue/no-dupe-v-else-if": "error",
  "vue/no-duplicate-attributes": "error",
  "vue/no-export-in-script-setup": "error",
  "vue/no-expose-after-await": "error",
  "vue/no-lifecycle-after-await": "error",
  "vue/no-mutating-props": "error",
  "vue/no-parsing-error": "error",
  "vue/no-ref-as-operand": "error",
  "vue/no-reserved-component-names": "error",
  "vue/no-reserved-keys": "error",
  "vue/no-reserved-props": "error",
  "vue/no-shared-component-data": "error",
  "vue/no-side-effects-in-computed-properties": "error",
  "vue/no-template-key": "error",
  "vue/no-textarea-mustache": "error",
  "vue/no-unused-components": "error",
  "vue/no-unused-vars": "error",
  "vue/no-use-computed-property-like-method": "error",
  "vue/no-use-v-if-with-v-for": "error",
  "vue/no-useless-template-attributes": "error",
  "vue/no-v-for-template-key-on-child": "error",
  "vue/no-v-text-v-html-on-component": "error",
  "vue/no-watch-after-await": "error",
  "vue/prefer-import-from-vue": "error",
  "vue/require-component-is": "error",
  "vue/require-prop-type-constructor": "error",
  "vue/require-render-return": "error",
  "vue/require-slots-as-functions": "error",
  "vue/require-toggle-inside-transition": "error",
  "vue/require-v-for-key": "error",
  "vue/require-valid-default-prop": "error",
  "vue/return-in-computed-property": "error",
  "vue/return-in-emits-validator": "error",
  "vue/use-v-on-exact": "error",
  "vue/valid-attribute-name": "error",
  "vue/valid-define-emits": "error",
  "vue/valid-define-props": "error",
  "vue/valid-next-tick": "error",
  "vue/valid-template-root": "error",
  "vue/valid-v-bind": "error",
  "vue/valid-v-cloak": "error",
  "vue/valid-v-else-if": "error",
  "vue/valid-v-else": "error",
  "vue/valid-v-for": "error",
  "vue/valid-v-html": "error",
  "vue/valid-v-if": "error",
  "vue/valid-v-is": "error",
  "vue/valid-v-memo": "error",
  "vue/valid-v-model": "error",
  "vue/valid-v-on": "error",
  "vue/valid-v-once": "error",
  "vue/valid-v-pre": "error",
  "vue/valid-v-show": "error",
  "vue/valid-v-slot": "error",
  "vue/valid-v-text": "error",

  //https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/vue3-strongly-recommended.js
  "vue/attribute-hyphenation": "warn",
  "vue/component-definition-name-casing": "warn",
  // 'vue/first-attribute-linebreak': 'warn', // Conflicts with Prettier.
  // 'vue/html-closing-bracket-newline': 'warn', // Conflicts with Prettier.
  // 'vue/html-closing-bracket-spacing': 'warn', // Conflicts with Prettier.
  // 'vue/html-end-tags': 'warn', // Conflicts with Prettier.
  // 'vue/html-indent': 'warn', // Conflicts with Prettier.
  // 'vue/html-quotes': 'warn', // Conflicts with Prettier.
  // 'vue/html-self-closing': 'warn', // Conflicts with Prettier.
  // 'vue/max-attributes-per-line': 'warn', // Conflicts with Prettier.
  // 'vue/multiline-html-element-content-newline': 'warn', // Conflicts with Prettier.
  // 'vue/mustache-interpolation-spacing': 'warn', // Conflicts with Prettier.
  // 'vue/no-multi-spaces': 'warn', // Conflicts with Prettier.
  // 'vue/no-spaces-around-equal-signs-in-attribute': 'warn', // Conflicts with Prettier.
  "vue/no-template-shadow": "warn",
  "vue/one-component-per-file": "warn",
  "vue/prop-name-casing": "warn",
  "vue/require-default-prop": "warn",
  "vue/require-explicit-emits": "warn",
  "vue/require-prop-types": "warn",
  // 'vue/singleline-html-element-content-newline': 'warn', // Conflicts with Prettier.
  "vue/v-bind-style": "warn",
  "vue/v-on-event-hyphenation": ["warn", "always", { autofix: true }],
  "vue/v-on-style": "warn",
  "vue/v-slot-style": "warn",

  // https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/vue3-recommended.js
  // 'vue/attributes-order': 'warn',
  "vue/attributes-order": [
    "warn",
    {
      alphabetical: true,
      order: [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT",
      ],
    },
  ],
  "vue/component-tags-order": "warn",
  "vue/no-lone-template": "warn",
  "vue/no-multiple-slot-args": "warn",
  "vue/no-v-html": "warn",
  // 'vue/order-in-components': 'warn',
  "vue/order-in-components": [
    "warn",
    {
      order: [
        "el",
        "name",
        "key",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        ["provide", "inject"],
        "ROUTER_GUARDS",
        "layout",
        "middleware",
        "validate",
        "scrollToTop",
        "transition",
        "loading",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "emits",
        "slots",
        "expose",
        "setup",
        "asyncData",
        "data",
        "fetch",
        "head",
        "computed",
        "watch",
        "watchQuery",
        "LIFECYCLE_HOOKS",
        // Support miniprogram.
        "onLaunch",
        "onInit",
        "onLoad",
        "onShow",
        "onReady",
        "onHide",
        "onUnload",
        "onError",
        "onUniNViewMessage",
        "onUnhandledRejection",
        "onPageNotFound",
        "onThemeChange",
        "onResize",
        "onPullDownRefresh",
        "onReachBottom",
        "onTabItemTap",
        "onShareAppMessage",
        "onPageScroll",
        "onNavigationBarButtonTap",
        "onBackPress",
        "onNavigationBarSearchInputChanged",
        "onNavigationBarSearchInputConfirmed",
        "onNavigationBarSearchInputClicked",
        "onShareTimeline",
        "onAddToFavorites",
        "methods",
        ["template", "render"],
        "renderError",
      ],
    },
  ],
  "vue/this-in-template": "warn",

  // https://github.com/future-architect/eslint-plugin-vue-scoped-css/blob/v2.9.0/lib/configs/vue3-recommended.ts
  // 'vue-scoped-css/enforce-style-type': 'error', // Too ideal for business.
  "vue-scoped-css/enforce-style-type": [
    "error",
    {
      allows: hasMiniProgram
        ? ["scoped", "module", "plain"] // uni-app doesn't support import style files directly.
        : ["scoped", "module"],
    },
  ],
  "vue-scoped-css/no-deprecated-deep-combinator": "error",
  "vue-scoped-css/no-parent-of-v-global": "error",
  "vue-scoped-css/no-parsing-error": "error",
  "vue-scoped-css/no-unused-keyframes": "error",
  "vue-scoped-css/no-unused-selector": "error",
  "vue-scoped-css/require-v-deep-argument": "error",
  "vue-scoped-css/require-v-global-argument": "error",
  "vue-scoped-css/require-v-slotted-argument": "error",

  // eslint-plugin-vue Uncategorized
  "vue/block-order": ["error", { order: ["script", "template", "style"] }],
  "vue/component-api-style": "error",
  "vue/component-name-in-template-casing": [
    "error",
    hasMiniProgram ? "PascalCase" : "kebab-case",
  ],
  "vue/component-options-name-casing": "error",
  "vue/custom-event-name-casing": "error",
  "vue/define-emits-declaration": "error",
  "vue/define-macros-order": [
    "error",
    {
      defineExposeLast: true,
      order: [
        "defineOptions",
        "defineModel",
        "defineProps",
        "defineEmits",
        "defineSlots",
      ],
    },
  ],
  "vue/define-props-declaration": "error",
  "vue/html-button-has-type": "error",
  "vue/next-tick-style": "error",
  "vue/no-boolean-default": ["error", "default-false"],
  "vue/no-deprecated-delete-set": "error",
  "vue/no-deprecated-model-definition": "error",
  "vue/no-duplicate-attr-inheritance": "error",
  "vue/no-empty-component-block": "error",
  "vue/no-potential-component-option-typo": "error",
  "vue/no-ref-object-reactivity-loss": "error",
  "vue/no-required-prop-with-default": ["error", { autofix: true }],
  "vue/no-restricted-v-bind": "error",
  "vue/no-root-v-if": "error",
  "vue/no-setup-props-reactivity-loss": "error",
  "vue/no-template-target-blank": "error",
  "vue/no-this-in-before-route-enter": "error",
  "vue/no-unused-emit-declarations": "error",
  "vue/no-use-v-else-with-v-for": "error",
  "vue/no-useless-mustaches": "error",
  "vue/no-useless-v-bind": "error",
  "vue/no-v-text": "error",
  "vue/prefer-define-options": "error",
  "vue/prefer-prop-type-boolean-first": "error",
  "vue/prefer-separate-static-class": "error",
  "vue/prefer-true-attribute-shorthand": "error",
  "vue/prefer-use-template-ref": "error",
  "vue/require-default-export": "error",
  "vue/require-emit-validator": "error",
  "vue/require-explicit-slots": "error",
  "vue/require-macro-variable-name": "error",
  "vue/require-name-property": "error",
  "vue/require-prop-comment": "warn",
  "vue/require-typed-object-prop": "error",
  "vue/require-typed-ref": "error",
  "vue/valid-define-options": "error",

  // eslint-plugin-vue-scoped-css Uncategorized
  "vue-scoped-css/no-deprecated-v-enter-v-leave-class": "error",
  "vue-scoped-css/v-deep-pseudo-style": ["error", ":deep"],
  "vue-scoped-css/v-global-pseudo-style": ["error", ":global"],
  "vue-scoped-css/v-slotted-pseudo-style": ["error", ":slotted"],
};

const vue2Rules: Rules = {
  // https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/vue2-essential.js
  // 'vue/multi-word-component-names': 'error', // Too ideal for business.
  "vue/multi-word-component-names": "off",
  "vue/no-arrow-functions-in-watch": "error",
  "vue/no-async-in-computed-properties": "error",
  "vue/no-child-content": "error",
  "vue/no-computed-properties-in-data": "error",
  "vue/no-custom-modifiers-on-v-model": "error",
  "vue/no-dupe-keys": "error",
  "vue/no-dupe-v-else-if": "error",
  "vue/no-duplicate-attributes": "error",
  "vue/no-export-in-script-setup": "error",
  "vue/no-multiple-template-root": "error",
  "vue/no-mutating-props": "error",
  "vue/no-parsing-error": "error",
  "vue/no-ref-as-operand": "error",
  "vue/no-reserved-component-names": "error",
  "vue/no-reserved-keys": "error",
  "vue/no-reserved-props": ["error", { vueVersion: 2 }],
  "vue/no-shared-component-data": "error",
  "vue/no-side-effects-in-computed-properties": "error",
  "vue/no-template-key": "error",
  "vue/no-textarea-mustache": "error",
  "vue/no-unused-components": "error",
  "vue/no-unused-vars": "error",
  "vue/no-use-computed-property-like-method": "error",
  "vue/no-use-v-if-with-v-for": "error",
  "vue/no-useless-template-attributes": "error",
  "vue/no-v-for-template-key": "error",
  "vue/no-v-model-argument": "error",
  "vue/no-v-text-v-html-on-component": "error",
  "vue/require-component-is": "error",
  "vue/require-prop-type-constructor": "error",
  "vue/require-render-return": "error",
  "vue/require-v-for-key": "error",
  "vue/require-valid-default-prop": "error",
  "vue/return-in-computed-property": "error",
  "vue/return-in-emits-validator": "error",
  "vue/use-v-on-exact": "error",
  "vue/valid-attribute-name": "error",
  "vue/valid-define-emits": "error",
  "vue/valid-define-props": "error",
  "vue/valid-model-definition": "error",
  "vue/valid-next-tick": "error",
  "vue/valid-template-root": "error",
  "vue/valid-v-bind-sync": "error",
  "vue/valid-v-bind": "error",
  "vue/valid-v-cloak": "error",
  "vue/valid-v-else-if": "error",
  "vue/valid-v-else": "error",
  "vue/valid-v-for": "error",
  "vue/valid-v-html": "error",
  "vue/valid-v-if": "error",
  "vue/valid-v-model": "error",
  "vue/valid-v-on": "error",
  "vue/valid-v-once": "error",
  "vue/valid-v-pre": "error",
  "vue/valid-v-show": "error",
  "vue/valid-v-slot": "error",
  "vue/valid-v-text": "error",

  // https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/vue2-strongly-recommended.js
  "vue/attribute-hyphenation": "warn",
  "vue/component-definition-name-casing": "warn",
  // 'vue/first-attribute-linebreak': 'warn', // Conflicts with Prettier.
  // 'vue/html-closing-bracket-newline': 'warn', // Conflicts with Prettier.
  // 'vue/html-closing-bracket-spacing': 'warn', // Conflicts with Prettier.
  // 'vue/html-end-tags': 'warn', // Conflicts with Prettier.
  // 'vue/html-indent': 'warn', // Conflicts with Prettier.
  // 'vue/html-quotes': 'warn', // Conflicts with Prettier.
  // 'vue/html-self-closing': 'warn', // Conflicts with Prettier.
  // 'vue/max-attributes-per-line': 'warn', // Conflicts with Prettier.
  // 'vue/multiline-html-element-content-newline': 'warn', // Conflicts with Prettier.
  // 'vue/mustache-interpolation-spacing': 'warn', // Conflicts with Prettier.
  // 'vue/no-multi-spaces': 'warn', // Conflicts with Prettier.
  // 'vue/no-spaces-around-equal-signs-in-attribute': 'warn', // Conflicts with Prettier.
  "vue/no-template-shadow": "warn",
  "vue/one-component-per-file": "warn",
  "vue/prop-name-casing": "warn",
  "vue/require-default-prop": "warn",
  "vue/require-prop-types": "warn",
  // 'vue/singleline-html-element-content-newline': 'warn', // Conflicts with Prettier.
  "vue/v-bind-style": "warn",
  "vue/v-on-style": "warn",
  "vue/v-slot-style": "warn",

  // https://github.com/vuejs/eslint-plugin-vue/blob/v9.32.0/lib/configs/vue2-recommended.js
  // 'vue/attributes-order': 'warn',
  "vue/attributes-order": [
    "warn",
    {
      alphabetical: true,
      order: [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT",
      ],
    },
  ],
  "vue/component-tags-order": "warn",
  "vue/no-lone-template": "warn",
  "vue/no-multiple-slot-args": "warn",
  "vue/no-v-html": "warn",
  // 'vue/order-in-components': 'warn',
  "vue/order-in-components": [
    "warn",
    {
      order: [
        "el",
        "name",
        "key",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        ["provide", "inject"],
        "ROUTER_GUARDS",
        "layout",
        "middleware",
        "validate",
        "scrollToTop",
        "transition",
        "loading",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "emits",
        "slots",
        "expose",
        "setup",
        "asyncData",
        "data",
        "fetch",
        "head",
        "computed",
        "watch",
        "watchQuery",
        "LIFECYCLE_HOOKS",
        // Support miniprogram.
        "onLaunch",
        "onInit",
        "onLoad",
        "onShow",
        "onReady",
        "onHide",
        "onUnload",
        "onError",
        "onUniNViewMessage",
        "onUnhandledRejection",
        "onPageNotFound",
        "onThemeChange",
        "onResize",
        "onPullDownRefresh",
        "onReachBottom",
        "onTabItemTap",
        "onShareAppMessage",
        "onPageScroll",
        "onNavigationBarButtonTap",
        "onBackPress",
        "onNavigationBarSearchInputChanged",
        "onNavigationBarSearchInputConfirmed",
        "onNavigationBarSearchInputClicked",
        "onShareTimeline",
        "onAddToFavorites",
        "methods",
        ["template", "render"],
        "renderError",
      ],
    },
  ],
  "vue/this-in-template": "warn",

  // https://github.com/future-architect/eslint-plugin-vue-scoped-css/blob/v2.9.0/lib/configs/recommended.ts
  // 'vue-scoped-css/enforce-style-type': 'error', // Too ideal for business.
  "vue-scoped-css/enforce-style-type": [
    "error",
    {
      allows: hasMiniProgram
        ? ["scoped", "module", "plain"] // uni-app doesn't support import style files directly.
        : ["scoped", "module"],
    },
  ],
  "vue-scoped-css/no-parsing-error": "error",
  "vue-scoped-css/no-unused-keyframes": "error",
  "vue-scoped-css/no-unused-selector": "error",

  // eslint-plugin-vue Uncategorized
  "vue/block-order": ["error", { order: ["template", "script", "style"] }],
  "vue/component-api-style": [
    "error",
    ["script-setup", "composition-vue2", "options"],
  ],
  "vue/component-name-in-template-casing": [
    "error",
    hasMiniProgram ? "PascalCase" : "kebab-case",
  ],
  "vue/component-options-name-casing": "error",
  "vue/custom-event-name-casing": ["error", "kebab-case"],
  "vue/define-emits-declaration": "error",
  "vue/define-macros-order": [
    "error",
    {
      defineExposeLast: true,
      order: [
        "defineOptions",
        "defineModel",
        "defineProps",
        "defineEmits",
        "defineSlots",
      ],
    },
  ],
  "vue/define-props-declaration": "error",
  "vue/html-button-has-type": "error",
  "vue/next-tick-style": "error",
  "vue/no-boolean-default": ["error", "default-false"],
  "vue/no-duplicate-attr-inheritance": "error",
  "vue/no-empty-component-block": "error",
  "vue/no-potential-component-option-typo": "error",
  "vue/no-ref-object-reactivity-loss": "error",
  "vue/no-required-prop-with-default": ["error", { autofix: true }],
  "vue/no-restricted-v-bind": "error",
  "vue/no-root-v-if": "error",
  "vue/no-setup-props-reactivity-loss": "error",
  "vue/no-template-target-blank": "error",
  "vue/no-this-in-before-route-enter": "error",
  "vue/no-unused-emit-declarations": "error",
  "vue/no-use-v-else-with-v-for": "error",
  "vue/no-useless-mustaches": "error",
  "vue/no-useless-v-bind": "error",
  "vue/no-v-text": "error",
  "vue/prefer-prop-type-boolean-first": "error",
  "vue/prefer-separate-static-class": "error",
  "vue/prefer-true-attribute-shorthand": "error",
  "vue/prefer-use-template-ref": "error",
  "vue/require-default-export": "error",
  "vue/require-emit-validator": "error",
  "vue/require-explicit-slots": "error",
  "vue/require-macro-variable-name": "error",
  "vue/require-name-property": "error",
  "vue/require-prop-comment": "warn",
  "vue/require-typed-object-prop": "error",
  "vue/require-typed-ref": "error",
  "vue/v-if-else-key": "warn",
  "vue/valid-define-options": "error",

  // eslint-plugin-vue-scoped-css Uncategorized
  "vue-scoped-css/v-deep-pseudo-style": ["error", "::v-deep"],
};

export function vue(options: VueOptions = {}): Config[] {
  const { files = [GLOB_VUE], rules = {}, typescriptRules = {} } = options;
  return [
    {
      name: "frameworks/vue",
      files,
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: "latest",
          extraFileExtensions: [".vue"],
          parser: {
            js: parserBabel,
            jsx: parserBabel,
            ts: parserTypeScript,
            tsx: parserTypeScript,
          },
          requireConfigFile: false,
          sourceType: "module",
        },
      },
      plugins: {
        vue: pluginVue,
        "vue-scoped-css": pluginVueScopedCss,
      },
      // @ts-expect-error maybe undefined
      processor: pluginVue.processors[".vue"],
      rules: {
        ...vueBaseRules,

        ...(hasVue3 ? vue3Rules : vue2Rules),

        ...rules,

        ...(hasTypeScript ? typescriptRules : {}),
      },
    },
  ];
}
