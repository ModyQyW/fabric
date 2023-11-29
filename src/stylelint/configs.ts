import { MINI_PROGRAM_ELEMENTS } from '../constants';
import { hasMiniProgram } from '../env';
import { Options } from './types';

export function extends_(options: Required<Options>) {
  const { order, scss: enableScss, style } = options;
  const extends_: string[] = [];
  if (order) extends_.push('stylelint-config-recess-order');
  if (style === 'recommended') extends_.push('stylelint-config-recommended');
  else extends_.push('stylelint-config-standard');
  if (enableScss) {
    if (style === 'recommended')
      extends_.push('stylelint-config-recommended-scss');
    else extends_.push('stylelint-config-standard-scss');
    extends_.push('');
  }
  extends_.push('stylelint-prettier/recommended');
  return extends_;
}

export function overrides(options: Options) {
  const { scss: enableScss, vue: enableVue } = options;
  const overrides = [];
  if (enableScss) {
    overrides.push({
      customSyntax: 'postcss-scss',
      files: ['*.scss', '**/*.scss'],
    });
  }
  if (enableVue) {
    overrides.push({
      customSyntax: 'postcss-html',
      files: ['*.vue', '**/*.vue'],
    });
  }
  return overrides;
}

export function rules(options: Options = {}) {
  const { scss: enableScss } = options;
  const rules: Record<string, any> = {
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'at-rule-no-unknown': [
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
    ],
    // https://stylelint.io/user-guide/rules/function-no-unknown/
    'function-no-unknown': [
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
    ],
    // run prettier directly
    'prettier/prettier': null,
    // https://stylelint.io/user-guide/rules/property-no-unknown/
    'property-no-unknown': [
      true,
      {
        // css modules
        // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.3.0/index.js
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
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.3.0/index.js
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
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.3.0/index.js
          'from',
        ],
      },
    ],
  };
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
