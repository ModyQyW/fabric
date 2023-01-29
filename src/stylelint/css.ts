import type { Config } from 'stylelint';

const config: Config = {
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
        ignoreAtRules: ['tailwind', 'value', 'layer', 'config'],
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
    '!.github',
    '!.vitepress',
    '!.vscode',
    '*.min.*',
    '.cache',
    '.git',
    '.hbuilder',
    '.hbuilderx',
    '.next',
    '.nitro',
    '.npm',
    '.nuxt',
    '.out',
    '.output',
    '.rax',
    '.temp',
    '.tmp',
    '.umi',
    'CHANGELOG.md',
    'LICENSE',
    'LICENSE*',
    '__snapshots__',
    'androidPrivacy.json',
    'auto-imports.d.ts',
    'cache',
    'components.d.ts',
    'coverage',
    'dist',
    'dist*',
    'node_modules',
    'out',
    'output',
    'package-lock.json',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'tmp',
    'yarn.lock',
  ],
};

export default config;
