require("esbuild-register");

const { simpleGitHooks } = require("./src/simple-git-hooks/factory.ts");

module.exports = simpleGitHooks();
