import fs from 'fs';
import path from 'path';

const settings: Record<string, any> = {
  'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  'import/resolver': {
    node: {},
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
if (fs.existsSync(path.resolve('node_modules', 'rax'))) {
  settings.react = {
    version: '999.999.999',
    pragma: 'createElement',
    pragmaFrag: 'Fragment',
  };
}

export default settings;
