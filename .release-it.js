module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
  },
  hooks: {
    'before:init': 'yarn run test',
    'after:bump': 'node generate-readme.js',
  },
};
