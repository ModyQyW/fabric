module.exports = {
  scripts: {
    posttag: "git push --follow-tags",
    // We have to use prerelease here
    // as commit-and-tag-version won't trigger preversion script in package.json
    prerelease: 'git-branch-is main && conc "pnpm:lint" "pnpm:type-check"',
  },
};
