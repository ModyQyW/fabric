module.exports = {
  '*.md': 'markdownlint --fix --ignore CHANGELOG.md',
  '*.{js,cjs,mjs,ts,cts,mts}': 'eslint --fix --cache',
};
