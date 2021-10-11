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
        '**/*.conf.js',
        '**/*.conf.*.js',
        '**/*.config.js',
        '**/*.config.*.js',
        '**/*.conf.ts',
        '**/*.conf.*.ts',
        '**/*.config.ts',
        '**/*.config.*.ts',
        '**/.*rc*',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
      ],
      optionalDependencies: false,
    },
  ],
  'no-console': 'warn',
  'no-debugger': 'warn',
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
      ignorePropertyModificationsForRegex: ['^draft'],
    },
  ],
  'no-template-curly-in-string': 'warn',
  'no-undef': 'warn',
  'no-unused-vars': 'warn',
  'unicorn/filename-case': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-null': 'off',
  'unicorn/numeric-separators-style': 'off',
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
          directories: true,
        },
        e: {
          error: true,
          event: true,
        },
        mod: {
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
