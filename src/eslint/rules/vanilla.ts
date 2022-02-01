import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  'class-methods-use-this': 'off',
  'import/prefer-default-export': 'off',
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
        '**/*.{conf,config,configs,setup}.{js,jsx,ts,tsx,vue,svelte}',
        '**/*.{conf,config,configs,setup}.*.{js,jsx,ts,tsx,vue,svelte}',
        '**/test.{js,jsx,ts,tsx,vue,svelte}',
        '**/test-*.{js,jsx,ts,tsx,vue,svelte}',
        '**/*{.,_}{test,spec}.{js,jsx,ts,tsx,vue,svelte}',
        '**/.*rc*',
        '**/gulpfile.{js,ts}',
        '**/gulpfile.*.{js,ts}',
      ],
      optionalDependencies: false,
    },
  ],
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
  'unicorn/filename-case': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-null': 'off',
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-node-protocol': 'off',
  'unicorn/prefer-object-from-entries': 'off',
  'unicorn/prevent-abbreviations': [
    'warn',
    {
      extendDefaultReplacements: false,
      replacements: {
        dest: {
          destination: true,
        },
        dir: {
          direction: true,
          directory: true,
        },
        dirs: {
          directions: true,
          directories: true,
        },
        e: {
          error: true,
          event: true,
        },
        mod: {
          modification: true,
          module: true,
        },
        rel: {
          related: true,
          relationship: true,
          relative: true,
        },
        req: {
          request: true,
        },
        res: {
          response: true,
          result: true,
        },
        ret: {
          returnValue: true,
        },
        retVal: {
          returnValue: true,
        },
        sep: {
          separator: true,
        },
        stdDev: {
          standardDeviation: true,
        },
        tbl: {
          table: true,
        },
        tit: {
          title: true,
        },
      },
    },
  ],
};

export default rules;
