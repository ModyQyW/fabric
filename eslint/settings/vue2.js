const fs = require('fs');
const path = require('path');

let settings = {
  'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
};

// vue-cli
if (fs.existsSync(path.resolve('node_modules', '@vue', 'cli-service'))) {
  settings = {
    ...settings,
    'import/resolver': {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396
      [require.resolve('eslint-import-resolver-node')]: {},
      [require.resolve('eslint-import-resolver-webpack')]: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  };
}

// nuxt
if (fs.existsSync(path.resolve('node_modules', '@nuxt', 'webpack'))) {
  settings = {
    ...settings,
    'import/resolver': {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396
      [require.resolve('eslint-import-resolver-node')]: {},
      [require.resolve('eslint-import-resolver-webpack')]: {
        config: require.resolve('@nuxt/webpack/dist/webpack.js'),
      },
    },
  };
}

module.exports = settings;
