const fs = require('fs');
const path = require('path');

const getFilePath = (filename) => {
  const shortFilename = filename.slice(
    0,
    filename.lastIndexOf('.') === 0 ? undefined : filename.lastIndexOf('.'),
  );
  const shortFilenameExamplePath = path.join(
    __dirname,
    'examples',
    `${shortFilename}-example`,
  );
  const filenameExamplePath = path.join(
    __dirname,
    'examples',
    `${shortFilename}-example`,
  );
  const shortFilenamePath = path.join(__dirname, shortFilename);
  const filenamePath = path.join(__dirname, filename);
  if (fs.existsSync(shortFilenameExamplePath)) {
    return shortFilenameExamplePath;
  }
  if (fs.existsSync(filenameExamplePath)) {
    return filenameExamplePath;
  }
  if (fs.existsSync(shortFilenamePath)) {
    return shortFilenamePath;
  }
  return filenamePath;
};

const gitattributes = fs.readFileSync(getFilePath('.gitattributes'));
const editorconfig = fs.readFileSync(getFilePath('.editorconfig'));
const prettierrc = fs.readFileSync(getFilePath('.prettierrc.js'));
const eslintrc = fs.readFileSync(getFilePath('.eslintrc.js'));
const stylelintrc = fs.readFileSync(getFilePath('.stylelintrc.js'));
const markdownlint = fs.readFileSync(getFilePath('.markdownlint.json'));
const commitlintrc = fs.readFileSync(getFilePath('.commitlintrc.js'));

const pkg = JSON.parse(fs.readFileSync('./package.json'));

const getDependencyVersion = (dependency) =>
  pkg.dependencies[dependency] || pkg.devDependencies[dependency] || 'latest';

const readme = `# ${pkg.name}

Opinionated shareable specification for different JavaScript/TypeScript projects.

Requires below.

- Node: ^12.17 || ^14 || ^16
- npm: ^6.14 || ^7

[Github](${pkg.homepage}) | [Gitee](${pkg.homepage.replace('github', 'gitee')})

## Usage

Using \`npm\` below. You can use [pnpm](https://pnpm.io/) or [yarn](https://classic.yarnpkg.com/) instead.

\`\`\`sh
# locally
npm i -D ${pkg.name}@~${pkg.version}

# globally
npm i -g ${pkg.name}@~${pkg.version}
\`\`\`

### CLI

CLI is used to config your new projects easier. Just call it after installing globally.

\`\`\`sh
# in current dir
modyqyw-fabric config
# specify PROJECT_DIR
modyqyw-fabric config ./
\`\`\`

Or, you can call it after installing locally.

\`\`\`sh
./node_modules/.bin/modyqyw-fabric config
\`\`\`

**CLI will not keep your original configs. Use CLI in old projects on your own risk.**

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- CSS/LESS/SCSS/SASS - [BEM](http://getbem.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/), [SMACSS](http://smacss.com/)

Besides, you can learn naming from some open-source projects.

In my opinion, simplicity and clarity are the highest priority for naming.

### Git

Learn about [Git](https://git-scm.com/doc), [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) and [GifLFS](https://git-lfs.github.com/).

\`\`\`sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
\`\`\`

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [Gitee](https://gitee.com/).

Set up \`\${PROJECT_DIR}/.gitattributes\`.

\`\`\`sh
${gitattributes}
\`\`\`

A better \`\${PROJECT_DIR}/.gitattributes\` example [here](https://stackoverflow.com/a/32278635).

A \`\${PROJECT_DIR}/.gitignore\` example [here](./.gitignore).

### EditorConfig

Learn about [EditorConfig](https://editorconfig.org/).

Set up \`\${PROJECT_DIR}/.editorconfig\`.

\`\`\`sh
${editorconfig}
\`\`\`

### Prettier

Learn about [Prettier](https://prettier.io/).

\`\`\`sh
npm i -D prettier@${getDependencyVersion('prettier')}
\`\`\`

Set up \`\${PROJECT_DIR}/.prettierrc.js\`.

\`\`\`js
${prettierrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:json",
    "lint:json": "prettier ./**/*.json --write --ignore-path=.gitignore"
  }
}

\`\`\`

### ESLint

Learn about [ESLint](https://eslint.org/).

\`\`\`sh
npm i -D eslint@${getDependencyVersion(
  'eslint',
)} @babel/core@${getDependencyVersion(
  '@babel/core',
)} @babel/eslint-parser@${getDependencyVersion('@babel/eslint-parser')}
\`\`\`

If you are using typescript, additional dependencies are needed.

\`\`\`sh
npm i -D typescript@${getDependencyVersion(
  'typescript',
)} @typescript-eslint/eslint-plugin@${getDependencyVersion(
  '@typescript-eslint/eslint-plugin',
)} @typescript-eslint/parser@${getDependencyVersion(
  '@typescript-eslint/parser',
)}
\`\`\`

Set up \`\${PROJECT_DIR}/.eslintrc.js\`.

\`\`\`js
${eslintrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:script",
    "lint:script": "eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore"
  }
}

\`\`\`

When using \`vue-cli-service\`, \`eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore\` can be replaced with \`vue-cli-service lint --fix\`.

You should declare \`paths\` in \`jsconfig.json\` or \`tsconfig.json\` if you are using path aliases.

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

\`\`\`sh
npm i -D stylelint@${getDependencyVersion('stylelint')}
\`\`\`

Set up \`\${PROJECT_DIR}/.stylelintrc.js\`.

\`\`\`js
${stylelintrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:style",
    "lint:style": "stylelint ./**/*.{css,less,scss,vue} --fix --allow-empty-input --ignore-path=.gitignore"
  }
}

\`\`\`

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint).

\`\`\`sh
npm i -D markdownlint-cli@${getDependencyVersion('markdownlint-cli')}
\`\`\`

Set up \`\${PROJECT_DIR}/.markdownlint.json\`.

\`\`\`json
${markdownlint}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:markdown",
    "lint:markdown": "markdownlint . --fix --ignore-path=.gitignore"
  }
}

\`\`\`

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/).

\`\`\`sh
npm i -D @commitlint/cli@${getDependencyVersion('@commitlint/cli')}
\`\`\`

Set up \`\${PROJECT_DIR}/.commitlintrc.js\`.

\`\`\`js
${commitlintrc}
\`\`\`

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

\`\`\`sh
npm i -D commitizen@${getDependencyVersion('commitizen')}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "commit": "cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}

\`\`\`

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged).

\`\`\`sh
npm install -D lint-staged@${getDependencyVersion('lint-staged')}

\`\`\`

Set up \`\${PROJECT_DIR}/.lintstagedrc.js\`.

\`\`\`js
module.exports = {
  '*.json': 'prettier --write',
  '*.{md,markdown}': 'markdownlint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{css,less,scss,vue}': 'stylelint --fix',
};

\`\`\`

When using \`vue-cli-service\`, \`eslint --fix\` can be replaced with \`vue-cli-service lint --fix\`.

### Husky

Learn about [Husky](https://github.com/typicode/husky).

\`\`\`sh
npm install -D is-ci@${getDependencyVersion(
  'is-ci',
)} husky@${getDependencyVersion('husky')}

npx husky install

\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "prepare": "is-ci || husky install"
  }
}

\`\`\`

Set up \`\${PROJECT_DIR}/.husky/commit-msg\` hook.

\`\`\`sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

\`\`\`

Set up \`\${PROJECT_DIR}/.husky/pre-commit\` hook.

\`\`\`sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged

\`\`\`

Finally use \`chmod\`.

\`\`\`sh
chmod +x .git/hooks/*
chmod +x .husky/*
\`\`\`

### Deploy

Experience has proven that automation is the best option. You may want to try packages below, sorted according to alphabetical order.

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Or [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar), see README carefully
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - If you are dealing with uni-*
- Set up \`Settings.json\`. Then \`F1 => File: Save\`.

\`\`\`json
{
  "css.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.markdownlint": true,
    "source.fixAll.stylelint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.rulers": [{ "column": 80 }],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.eol": "\\n",
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.json": "jsonc",
    "*.nvue": "vue",
    "*.ux": "vue"
  },
  "less.validate": false,
  "scss.validate": false,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
\`\`\`

## Migrate

### Migrate 3.x from 2.x

- Support CommonJS require and ESM import.
- Prettier/ESLint/Stylelint/Commitlint config changed.

\`\`\`js
const { prettier, eslint, stylelint, commitlint } = require('@modyqyw/fabric');

...

\`\`\`

- Use \`eslint.vanilla\` instead of \`eslint.native\`.
- Use \`stylelint.scss\` instead of \`stylelint.sass\`.

### Migrate 2.x from 1.x

Just upgrade your node' and dependencies' versions.

## Acknowledge

Sorted according to alphabetical order.

- [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Code Guide](https://codeguide.co/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [TypeScript Deep Dive - TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
`;

fs.writeFileSync('README.md', readme);
