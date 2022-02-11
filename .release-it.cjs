module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run build && pnpm run lint',
    'after:bump': 'node generate-readme.cjs && pnpm run build',
    'after:release': 'cnpm sync @modyqyw/fabric',
  },
};
