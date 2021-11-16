import fs from 'fs';
import path from 'path';

const settings: Record<string, any> = {
  'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  'import/resolver': {
    node: {},
    // eslint-disable-next-line no-nested-ternary
    // webpack: fs.existsSync(path.resolve('node_modules', '@vue', 'cli-service'))
    //   ? { config: require.resolve('@vue/cli-service/webpack.config.js') }
    //   : fs.existsSync(path.resolve('node_modules', '@nuxt', 'webpack'))
    //   ? { config: require.resolve('@nuxt/webpack/dist/webpack.js') }
    //   : {},
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
