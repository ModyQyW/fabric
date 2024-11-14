import { MINI_PROGRAM_ELEMENTS } from "../constants.ts";
import { hasMiniProgram } from "../env.ts";
import type { Config } from "stylelint";
import type { Options } from "./types.ts";

export function extends_(options: Required<Options>) {
  const { order, scss: enableScss } = options;

  const array: string[] = [
    "stylelint-config-html",
    "stylelint-config-standard",
  ];

  if (enableScss) array.push("stylelint-config-standard-scss");

  if (order) array.push("stylelint-config-recess-order");

  return array;
}

export function plugins(options: Required<Options>) {
  const { defensiveCss, highPerformanceAnimation, logicalCss } = options;

  const array: string[] = [];

  if (highPerformanceAnimation)
    array.push("stylelint-high-performance-animation");

  if (defensiveCss) array.push("stylelint-plugin-defensive-css");

  if (logicalCss) array.push("stylelint-plugin-logical-css");

  return array;
}

export function rules(options: Required<Options>) {
  const {
    defensiveCss,
    highPerformanceAnimation,
    logicalCss,
    scss: enableScss,
  } = options;

  const object: Config["rules"] = {
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          "value",
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#directives
          "tailwind",
          "layer",
          "apply",
          "config",
        ],
      },
    ],
    // https://stylelint.io/user-guide/rules/function-no-unknown/
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          "global",
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#functions
          "theme",
          "screen",
          // vue
          // https://vuejs.org/api/sfc-css-features.html#v-bind-in-css
          "v-bind",
        ],
      },
    ],
    // https://stylelint.io/user-guide/rules/property-no-unknown/
    "property-no-unknown": [
      true,
      {
        // css modules
        // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
        ignoreProperties: ["composes", "compose-with"],
        ignoreSelectors: [":export", /^:import/],
      },
    ],
    // https://stylelint.io/user-guide/rules/selector-class-pattern/
    "selector-class-pattern": [
      // https://regexr.com/3apms
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
      {
        message: (selector: string) =>
          `Expected class selector "${selector}" to be kebab-case or BEM`,
      },
    ],
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          "export",
          "import",
          "local",
          "external",
          // css modules
          // also vue global selectors
          // https://vuejs.org/api/sfc-css-features.html#scoped-css
          "global",
          // vue deep selectors
          // https://vuejs.org/api/sfc-css-features.html#deep-selectors
          "deep",
          // vue slotted selectors
          // https://vuejs.org/api/sfc-css-features.html#slotted-selectors
          "slotted",
        ],
      },
    ],
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
    "selector-pseudo-element-no-unknown": [
      true,
      // vue legacy support
      { ignorePseudoElements: ["v-global", "v-deep", "v-slotted"] },
    ],
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
    "selector-type-no-unknown": [
      true,
      {
        ignore: ["custom-elements"],
        ignoreTypes: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          "from",
          // mini program
          ...(hasMiniProgram ? MINI_PROGRAM_ELEMENTS : []),
        ],
      },
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: hasMiniProgram ? ["rpx"] : [],
      },
    ],
  };

  if (highPerformanceAnimation) {
    object["plugin/no-low-performance-animation-properties"] = true;
  }

  if (defensiveCss) {
    object["plugin/use-defensive-css"] = [
      true,
      {
        "accidental-hover": true,
        "background-repeat": true,
        "custom-property-fallbacks": true,
        "flex-wrapping": true,
        "scroll-chaining": true,
        "scrollbar-gutter": true,
        "vendor-prefix-grouping": true,
      },
    ];
  }

  if (logicalCss) {
    object["plugin/use-logical-properties-and-values"] = [
      true,
      { disableFix: true, severity: "warning" },
    ];
    object["plugin/use-logical-units"] = [
      true,
      { disableFix: true, severity: "warning" },
    ];
  }

  if (enableScss) {
    object["at-rule-no-unknown"] = null;
    object["scss/at-rule-no-unknown"] = [
      true,
      {
        ignoreAtRules: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          "value",
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#directives
          "tailwind",
          "layer",
          "apply",
          "config",
        ],
      },
    ];
    object["function-no-unknown"] = null;
    object["scss/function-no-unknown"] = [
      true,
      {
        ignoreFunctions: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          "global",
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#functions
          "theme",
          "screen",
          // vue
          // https://vuejs.org/api/sfc-css-features.html#v-bind-in-css
          "v-bind",
        ],
      },
    ];
    object["property-no-unknown"] = null;
    object["scss/property-no-unknown"] = [
      true,
      {
        // css modules
        // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
        ignoreProperties: ["composes", "compose-with"],
        ignoreSelectors: [":export", /^:import/],
      },
    ];
    // disable stylistic rules
    // https://github.com/prettier/stylelint-config-prettier-scss/blob/v1.0.0/src/index.js
    object["scss/at-else-closing-brace-newline-after"] = null;
    object["scss/at-else-closing-brace-space-after"] = null;
    object["scss/at-else-empty-line-before"] = null;
    object["scss/at-else-if-parentheses-space-before"] = null;
    object["scss/at-function-parentheses-space-before"] = null;
    object["scss/at-if-closing-brace-newline-after"] = null;
    object["scss/at-if-closing-brace-space-after"] = null;
    object["scss/at-mixin-parentheses-space-before"] = null;
    object["scss/dollar-variable-colon-newline-after"] = null;
    object["scss/dollar-variable-colon-space-after"] = null;
    object["scss/dollar-variable-colon-space-before"] = null;
    object["scss/operator-no-newline-after"] = null;
    object["scss/operator-no-newline-before"] = null;
    object["scss/operator-no-unspaced"] = null;
  }

  return object;
}
