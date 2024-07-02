import { MINI_PROGRAM_ELEMENTS } from '../constants';
import { hasMiniProgram } from '../env';
import type { Options } from './types';

export function extends_(options: Required<Options>) {
  const { order, scss: enableScss, style } = options;

  const extends_: string[] = [];

  extends_.push('stylelint-config-html', `stylelint-config-${style}`);

  if (order) extends_.push('stylelint-config-recess-order');

  if (enableScss) extends_.push(`stylelint-config-${style}-scss`);

  extends_.push('stylelint-prettier/recommended');

  return extends_;
}

export function plugins(options: Required<Options>) {
  const { defensiveCss, highPerformanceAnimation, logicalCss } = options;

  const plugins: string[] = [];

  if (highPerformanceAnimation)
    plugins.push('stylelint-high-performance-animation');

  if (defensiveCss) plugins.push('stylelint-plugin-defensive-css');

  if (logicalCss) plugins.push('stylelint-plugin-logical-css');

  return plugins;
}

export function rules(options: Required<Options>) {
  const {
    defensiveCss,
    highPerformanceAnimation,
    logicalCss,
    scss: enableScss,
  } = options;

  const rules: Record<string, any> = {
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'value',
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#directives
          'tailwind',
          'layer',
          'apply',
          'config',
        ],
      },
    ],
    // https://stylelint.io/user-guide/rules/function-no-unknown/
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'global',
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#functions
          'theme',
          'screen',
          // vue
          // https://vuejs.org/api/sfc-css-features.html#v-bind-in-css
          'v-bind',
        ],
      },
    ],
    // run prettier directly
    'prettier/prettier': null,
    // https://stylelint.io/user-guide/rules/property-no-unknown/
    'property-no-unknown': [
      true,
      {
        // css modules
        // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'export',
          'import',
          'local',
          'external',
          // css modules
          // also vue global selectors
          // https://vuejs.org/api/sfc-css-features.html#scoped-css
          'global',
          // vue deep selectors
          // https://vuejs.org/api/sfc-css-features.html#deep-selectors
          'deep',
          // vue slotted selectors
          // https://vuejs.org/api/sfc-css-features.html#slotted-selectors
          'slotted',
        ],
      },
    ],
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
    'selector-pseudo-element-no-unknown': [
      true,
      // vue
      // legacy support
      { ignorePseudoElements: ['v-global', 'v-deep', 'v-slotted'] },
    ],
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'from',
        ],
      },
    ],
  };

  if (highPerformanceAnimation) {
    rules['plugin/no-low-performance-animation-properties'] = true;
  }

  if (defensiveCss) {
    rules['plugin/use-defensive-css'] = [
      true,
      {
        'accidental-hover': true,
        'background-repeat': true,
        'custom-property-fallbacks': true,
        'flex-wrapping': true,
        'scroll-chaining': true,
        'scrollbar-gutter': true,
        'vendor-prefix-grouping': true,
      },
    ];
  }

  if (logicalCss) {
    rules['plugin/use-logical-properties-and-values'] = [
      true,
      { disableFix: true, severity: 'warning' },
    ];
    rules['plugin/use-logical-units'] = [
      true,
      { disableFix: true, severity: 'warning' },
    ];
  }

  if (hasMiniProgram) {
    rules['selector-type-no-unknown'] = [
      true,
      {
        ignoreTypes: [
          ...MINI_PROGRAM_ELEMENTS,
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.3.0/index.js
          'from',
        ],
      },
    ];
    rules['unit-no-unknown'] = [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ];
  }

  if (enableScss) {
    rules['at-rule-no-unknown'] = null;
    rules['scss/at-rule-no-unknown'] = [
      true,
      {
        ignoreAtRules: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.3.0/index.js
          'value',
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#directives
          'tailwind',
          'layer',
          'apply',
          'config',
        ],
      },
    ];
    rules['function-no-unknown'] = null;
    rules['scss/function-no-unknown'] = [
      true,
      {
        ignoreFunctions: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.3.0/index.js
          'global',
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#functions
          'theme',
          'screen',
          // vue
          // https://vuejs.org/api/sfc-css-features.html#v-bind-in-css
          'v-bind',
        ],
      },
    ];
    // disable stylistic rules
    rules['scss/at-else-closing-brace-newline-after'] = null;
    rules['scss/at-else-closing-brace-space-after'] = null;
    rules['scss/at-else-empty-line-before'] = null;
    rules['scss/at-else-if-parentheses-space-before'] = null;
    rules['scss/at-function-parentheses-space-before'] = null;
    rules['scss/at-if-closing-brace-newline-after'] = null;
    rules['scss/at-if-closing-brace-space-after'] = null;
    rules['scss/at-mixin-parentheses-space-before'] = null;
    rules['scss/dollar-variable-colon-newline-after'] = null;
    rules['scss/dollar-variable-colon-space-after'] = null;
    rules['scss/dollar-variable-colon-space-before'] = null;
    rules['scss/operator-no-newline-after'] = null;
    rules['scss/operator-no-newline-before'] = null;
    rules['scss/operator-no-unspaced'] = null;
  }

  return rules;
}
