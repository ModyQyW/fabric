module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run build && pnpm run lint',
    'after:bump': 'node generate-readme.cjs && pnpm run build',
  },
};
