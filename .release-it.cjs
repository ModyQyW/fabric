module.exports = {
  npm: {
    push: true,
  },
  git: {
    commit: true,
    commitMessage: 'chore(release): v${version}',
    push: true,
    tag: true,
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run build && pnpm run lint',
    'after:bump': 'node generate-readme.cjs && pnpm run build',
    'after:release': 'cnpm sync @modyqyw/fabric',
  },
};
