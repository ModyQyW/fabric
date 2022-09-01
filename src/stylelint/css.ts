import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    // tailwindcss
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'value', 'layer'],
      },
    ],
    // css modules
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    // css modules
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'deep', 'slotted', 'global', 'local', 'external'],
      },
    ],
    // prettier
    'prettier/prettier': true,
  },
  ignoreFiles: [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'androidPrivacy.json',
    'auto-imports.d.ts',
    'components.d.ts',
    'public',
    'dist*',
    'out',
    '.cache',
    '.temp',
    '.tmp',
    'cache',
    'temp',
    'tmp',
    'node_modules',
  ],
};

export default config;
