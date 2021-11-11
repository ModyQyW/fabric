import type { Linter } from 'eslint';

const rules: Partial<{
  [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
}> = {
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
        '**/*.{conf,config,configs,setup}.{js,jsx,ts,tsx,vue}',
        '**/*.{conf,config,configs,setup}.*.{js,jsx,ts,tsx,vue}',
        '**/test.{js,jsx,ts,tsx,vue}',
        '**/test-*.{js,jsx,ts,tsx,vue}',
        '**/*{.,_}{test,spec}.{js,jsx,ts,tsx,vue}',
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
        'r',
        'res',
        'result',
        'response',
        'state',
      ],
      ignorePropertyModificationsForRegex: ['^draft'], // immer
    },
  ],
  'no-template-curly-in-string': 'warn', // release-it git commitMessage
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
