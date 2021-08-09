module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'yarn install && yarn run lint',
    'after:bump': 'node generate-readme.js && yarn build',
  },
};
