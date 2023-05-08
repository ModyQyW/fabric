module.exports = {
  'package.json': 'sort-package-json',
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,json,jsonc,json5,yaml,yml}': 'eslint --fix --cache --ignore-path=.gitignore',
};
