import type { Config } from 'stylelint';
import { hasMiniprogram, hasScss, miniprogramElements } from './helpers';

if (hasScss) console.info('[Stylelint] @modyqyw/fabric scss config enabled.');
if (hasMiniprogram) console.info('[Stylelint] @modyqyw/fabric miniprogram config enabled.');

const config: Config = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    hasScss ? 'stylelint-config-recommended-scss' : '',
    hasScss ? 'stylelint-config-prettier-scss' : '',
  ].filter((item) => !!item),
  rules: {
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.1.0/index.js
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
    ...(hasMiniprogram
      ? {
          'selector-type-no-unknown': [
            true,
            {
              ignoreTypes: [
                ...miniprogramElements,
                // css modules
                // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.1.0/index.js
                'from',
              ],
            },
          ],
        }
      : { 'selector-type-no-unknown': [true, { ignoreTypes: ['from'] }] }),
    // https://stylelint.io/user-guide/rules/property-no-unknown/
    'property-no-unknown': [
      true,
      {
        // css modules
        // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.1.0/index.js
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    // https://stylelint.io/user-guide/rules/function-no-unknown/
    ...(hasScss
      ? {
          'function-no-unknown': null,
          'scss/function-no-unknown': [
            true,
            {
              ignoreFunctions: [
                // css modules
                // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.1.0/index.js
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
        }
      : {
          'function-no-unknown': [
            true,
            { ignoreFunctions: ['global', 'theme', 'screen', 'v-bind'] },
          ],
        }),
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    ...(hasScss
      ? {
          'at-rule-no-unknown': null,
          'scss/at-rule-no-unknown': [
            true,
            {
              ignoreAtRules: [
                // css modules
                // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.1.0/index.js
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
        }
      : {
          'at-rule-no-unknown': [
            true,
            { ignoreAtRules: ['value', 'tailwind', 'layer', 'apply', 'config'] },
          ],
        }),
    // https://stylelint.io/user-guide/rules/unit-no-unknown/
    ...(hasMiniprogram ? { 'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }] } : {}),
    'prettier/prettier': true,
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  // https://github.com/stylelint/stylelint/issues/5804
  // ignorePatterns: [
  //   '!.github',
  //   '!.vitepress',
  //   '!.vscode',
  //   '*.min.*',
  //   '.cache',
  //   '.git',
  //   '.hbuilder',
  //   '.hbuilderx',
  //   '.next',
  //   '.nitro',
  //   '.npm',
  //   '.nuxt',
  //   '.out',
  //   '.output',
  //   '.rax',
  //   '.temp',
  //   '.tmp',
  //   '.umi',
  //   'CHANGELOG.md',
  //   'LICENSE',
  //   'LICENSE*',
  //   '__snapshots__',
  //   'androidPrivacy.json',
  //   'auto-imports.d.ts',
  //   'cache',
  //   'components.d.ts',
  //   'coverage',
  //   'dist',
  //   'dist*',
  //   'node_modules',
  //   'out',
  //   'output',
  //   'package-lock.json',
  //   'pnpm-lock.yaml',
  //   'public',
  //   'temp',
  //   'tmp',
  //   'yarn.lock',
  // ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
};

export default config;
