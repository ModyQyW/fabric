import type { Linter } from 'eslint';

const overrides: Linter.ConfigOverride[] = [
  {
    files: ['*.json', '*.jsonc', '*.json5'],
    parser: 'jsonc-eslint-parser',
    parserOptions: {
      jsonSyntax: 'JSONC',
    },
  },
  {
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    parserOptions: {
      jsonSyntax: 'JSON',
    },
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'name',
            'version',
            'description',
            'keywords',
            'license',
            'repository',
            'funding',
            'author',
            'type',
            'files',
            'exports',
            'main',
            'module',
            'unpkg',
            'bin',
            'scripts',
            'husky',
            'lint-staged',
            'peerDependencies',
            'peerDependenciesMeta',
            'dependencies',
            'devDependencies',
            'eslintConfig',
          ],
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' },
        },
      ],
    },
  },
  {
    files: ['*.toml'],
    parser: 'toml-eslint-parser',
  },
  {
    files: ['*.yaml', '*.yml'],
    parser: 'yaml-eslint-parser',
  },
];

export default overrides;
