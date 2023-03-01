module.exports = {
  'package.json': "sort-package-json",
  '*.md': 'markdownlint --fix --ignore=CHANGELOG.md --ignore-path=.gitignore',
  '*.{js,cjs,mjs,ts,cts,mts}': 'eslint --fix --cache',
};
