const { eslint } = require('./dist');

module.exports = {
  ...eslint.vanillaPrettier,
};
