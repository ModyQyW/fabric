module.exports = {
  'no-console':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  'no-debugger':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'accumulator',
        'e',
        'err',
        'error',
        'event',
        'r',
        'res',
        'result',
        'response',
      ],
    },
  ],
  'no-unused-vars':
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'pre-production' ||
    process.env.NODE_ENV === 'staging'
      ? 'warn'
      : 'off',
  'prettier/prettier': 'warn',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
      },
      ignore: ['.jsx$', '.tsx$', '.vue$'],
    },
  ],
  'unicorn/no-null': 'off',
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
          err: true,
          error: true,
          ev: true,
          evt: true,
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
