require('esbuild-register');
// eslint-disable-next-line import/no-unresolved
const { simpleGitHooks } = require('./src/simple-git-hooks');

module.exports = simpleGitHooks();
