import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  'class-methods-use-this': 'off',
  'import/extensions': [
    'error',
    'always',
    {
      js: 'never',
      cjs: 'never',
      mjs: 'never',
      jsx: 'never',
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/conf/**',
        '**/config/**',
        '**/configs/**',
        '**/mock/**',
        '**/mocks/**',
        '**/test/**',
        '**/tests/**',
        '**/spec/**',
        '**/__mock__/**',
        '**/__mocks__/**',
        '**/__test__/**',
        '**/__tests__/**',
        '**/*.{conf,config,configs,setup}.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}',
        '**/*.{conf,config,configs,setup}.*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}',
        '**/test.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}',
        '**/test-*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}',
        '**/*{.,_}{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}',
        '**/.*rc*',
        '**/gulpfile.{js,cjs,mjs,ts,cts,mts}',
        '**/gulpfile.*.{js,cjs,mjs,ts,cts,mts}',
      ],
      optionalDependencies: false,
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    },
  ],
  'import/prefer-default-export': 'off',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'app',
        'application',
        'arg',
        'args',
        'argument',
        'arguments',
        'conf',
        'config',
        'configs',
        'configuration',
        'configurations',
        'ctx',
        'context',
        'e',
        'err',
        'error',
        'event',
        'info',
        'information',
        'inst',
        'instance',
        'r',
        'req',
        'request',
        'res',
        'result',
        'response',
        'state',
      ],
      ignorePropertyModificationsForRegex: ['^(d|D)raft', '(d|D)raft$'], // immer
    },
  ],
  'no-template-curly-in-string': 'off',
  'no-underscore-dangle': 'off', // mongodb
};

export default rules;
