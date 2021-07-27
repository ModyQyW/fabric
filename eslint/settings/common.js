const fs = require('fs');
const path = require('path');

let settings = {
  'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
  'import/resolver': {
    node: {},
    // eslint-disable-next-line no-nested-ternary
    webpack: fs.existsSync(path.resolve('node_modules', '@vue', 'cli-service'))
      ? { config: require.resolve('@vue/cli-service/webpack.config.js') }
      : fs.existsSync(path.resolve('node_modules', '@nuxt', 'webpack'))
      ? { config: require.resolve('@nuxt/webpack/dist/webpack.js') }
      : {},
    typescript: {},
  },
};

// rax
if (fs.existsSync(path.resolve('node_modules', 'rax'))) {
  settings = {
    ...settings,
    react: {
      version: '999.999.999',
      pragma: 'createElement',
      pragmaFrag: 'Fragment',
    },
  };
}

module.exports = settings;
