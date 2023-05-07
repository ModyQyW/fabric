module.exports = {
  scripts: {
    prerelease: "concurrently \"pnpm:lint\" \"pnpm:check:types\"",
    posttag: "git push --follow-tags"
  },
};
