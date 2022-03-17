import fs from 'fs';
import path from 'path';

const settings: Record<string, any> = {
  'import/extensions': ['.js', '.cjs', 'mjs', '.jsx'],
  'import/resolver': {
    node: {
      extensions: ['.js', '.cjs', '.mjs', '.jsx', '.json'],
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
