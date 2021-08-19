module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run lint',
    'after:bump': 'node generate-readme.js && pnpm build',
  },
};
