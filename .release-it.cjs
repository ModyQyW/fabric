module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      header: '# Changelog',
      infile: 'CHANGELOG.md',
      preset: 'conventionalcommits',
    },
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run lint',
  },
};
