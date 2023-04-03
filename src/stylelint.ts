import type { Config } from 'stylelint';
import getDebug from 'debug';
import { enableMiniprogram, enablePrettier, enableScss } from './helpers';

const debug = getDebug('@modyqyw/fabric/stylelint');

debug('CSS config enabled.');
debug(`SCSS config ${enableScss ? 'enabled' : 'disabled'}.`);
debug(`miniprogram config ${enableMiniprogram ? 'enabled' : 'disabled'}.`);

const miniprogramElements = [
  'page',
  'cover-image',
  'cover-view',
  'grid-view',
  'list-view',
  'match-media',
  'movable-area',
  'movable-view',
  'page-container',
  'root-portal',
  'scroll-view',
  'share-element',
  'sticky-header',
  'sticky-section',
  'swiper',
  'swiper-item',
  'view',
  'icon',
  'progress',
  'rich-text',
  'text',
  'button',
  'checkbox',
  'checkbox-group',
  'editor',
  'form',
  'input',
  'keyboard-accessory',
  'label',
  'picker',
  'picker-view',
  'picker-view-column',
  'radio',
  'radio-group',
  'slider',
  'switch',
  'textarea',
  'functional-page-navigator',
  'navigator',
  'audio',
  'camera',
  'channel-live',
  'channel-video',
  'image',
  'live-player',
  'live-pusher',
  'video',
  'voip-room',
  'map',
  'canvas',
  'web-view',
  'ad',
  'ad-rewarded-video',
  'ad-fullscreen-video',
  'ad-interstitial',
  'ad-draw',
  'ad-content-page',
  'ad-interactive',
  'ad-custom',
  'official-account',
  'open-data',
  'native-component',
  'aria-component',
  'navigation-bar',
  'page-meta',
  'unicloud-db',
];

const config: Config = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    enableScss ? 'stylelint-config-recommended-scss' : '',
    enablePrettier ? '' : 'stylelint-stylistic/config',
  ].filter((item) => !!item),
  rules: {
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.2.0/index.js
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
    ...(enableMiniprogram
      ? {
          'selector-type-no-unknown': [
            true,
            {
              ignoreTypes: [
                ...miniprogramElements,
                // css modules
                // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.2.0/index.js
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
        // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.2.0/index.js
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    // https://stylelint.io/user-guide/rules/function-no-unknown/
    ...(enableScss
      ? {
          'function-no-unknown': null,
          'scss/function-no-unknown': [
            true,
            {
              ignoreFunctions: [
                // css modules
                // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.2.0/index.js
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
    ...(enableScss
      ? {
          'at-rule-no-unknown': null,
          'scss/at-rule-no-unknown': [
            true,
            {
              ignoreAtRules: [
                // css modules
                // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.2.0/index.js
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
    ...(enableMiniprogram ? { 'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }] } : {}),
    // disable stylistic rules
    ...(enableScss
      ? {
          'scss/operator-no-newline-after': null,
          'scss/operator-no-newline-before': null,
          'scss/operator-no-unspaced': null,
        }
      : {}),
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
  //   'typed-router.d.ts',
  //   'unpackage',
  //   'yarn.lock',
  // ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
};

export default config;
