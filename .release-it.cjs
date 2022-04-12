module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run lint',
    'after:bump':
      'esmo ./scripts/generate-readme.mts && esmo ./scripts/generate-readme-zh-hans.mts',
  },
};
