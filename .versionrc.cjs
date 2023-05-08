module.exports = {
  scripts: {
    prerelease: "conc \"pnpm:lint\" \"pnpm:check:types\"",
    posttag: "git push --follow-tags"
  },
};
