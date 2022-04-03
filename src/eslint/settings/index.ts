import fs from 'fs';
import path from 'path';

const settings: Record<string, any> = {
  'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts'],
  'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
  },
  'import/resolver': {
    node: {
      extensions: ['.js', '.mjs', '.jsx', '.json', '.ts', '.mts', '.tsx', '.d.ts'],
    },
    webpack: {},
  },
};

if (fs.existsSync(path.resolve('tsconfig.json'))) {
  settings['import/resolver'].typescript = {};
} else if (fs.existsSync(path.resolve('jsconfig.json'))) {
  settings['import/resolver'].typescript = {
    project: './jsconfig.json',
  };
}

// rax
// https://github.com/alibaba/f2e-spec/blob/main/packages/eslint-config-ali/rules/rax.js
if (fs.existsSync(path.resolve('node_modules', 'rax'))) {
  settings.react = {
    version: '999.999.999',
    pragma: 'createElement',
    pragmaFrag: 'Fragment',
  };
}

export default settings;
