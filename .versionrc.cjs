module.exports = {
  scripts: {
    posttag: 'git push --follow-tags',
    prerelease: 'pnpm install && conc "pnpm:lint" "pnpm:type-check"',
  },
};
