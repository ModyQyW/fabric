const { eslint } = require('./dist/index.js');

module.exports = {
  ...eslint.vanillaPrettier,
};
