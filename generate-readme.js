const fs = require('fs');
const path = require('path');

const getFilePath = (filename) => {
  if (fs.existsSync(path.join(__dirname, 'config', filename))) {
    return path.join(__dirname, 'config', filename);
  }
  return path.join(__dirname, filename);
};

const packageObject = JSON.parse(fs.readFileSync('./package.json'));
const gitattributes = fs.readFileSync(getFilePath('.gitattributes'));
const editorconfig = fs.readFileSync(getFilePath('.editorconfig'));
const prettierrc = fs.readFileSync(getFilePath('.prettierrc.js'));
const eslintrc = fs.readFileSync(getFilePath('.eslintrc.js'));
const stylelintrc = fs.readFileSync(getFilePath('.stylelintrc.js'));
const markdownlint = fs.readFileSync(getFilePath('.markdownlint.json'));
const lintmdrc = fs.readFileSync(getFilePath('.lintmdrc'));
const lsLint = fs.readFileSync(getFilePath('.ls-lint.yml'));
const commitlintrc = fs.readFileSync(getFilePath('.commitlintrc.js'));

const readme = `# ${packageObject.name}

Shareable specification for different front-end projects.

[Github](${packageObject.homepage}) | [Gitee](${packageObject.homepage.replace(
  'github',
  'gitee',
)})

## Usage

\`\`\`sh
# locally
npm i -D ${packageObject.name}@~${packageObject.version}
# or
# yarn add -D ${packageObject.name}@~${packageObject.version}

# globally
npm i -g ${packageObject.name}@~${packageObject.version}
# or
# yarn add -g ${packageObject.name}@~${packageObject.version}
\`\`\`

### CLI (beta)

**This is still a beta feature and may cause your project to crash. Please use it in your new projects and give feedback. It will get smarter in the foreseeable future.**

CLI is used to config your project easier. Just call it after installing globally.

\`\`\`sh
# in current dir
modyqyw-fabric config
# specify PROJECT_DIR
modyqyw-fabric config ./
\`\`\`

Or, you can use scripts in \`\${PROJECT_DIR}package.json\` if you install locally.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "config": "modyqyw-fabric config"
  }
}

\`\`\`

\`\`\`sh
npm run config
# or
# yarn run config
\`\`\`

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet#readme)
- CSS/LESS/SASS/SCSS - [BEM](http://getbem.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/), [SMACSS](http://smacss.com/)

Besides, you can learn naming from some open-source projects, such as [Vuetify](https://vuetifyjs.com/), [MaterialUI](https://material-ui.com/), [Bootstrap](https://getbootstrap.com/), [TailwindCSS](https://tailwindcss.com/) and [Bulma](https://bulma.io/).

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
npm i -D prettier@${packageObject.devDependencies.prettier}
# or
# yarn add -D prettier@${packageObject.devDependencies.prettier}
\`\`\`

Set up \`\${PROJECT_DIR}/.prettierrc.js\`.

\`\`\`js
${prettierrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:json",
    "lint:json": "prettier ./**/*.json --write"
  }
}

\`\`\`

A \`\${PROJECT_DIR}/.prettierignore\` example [here](./config/.prettierignore).

### ESLint

Learn about [ESLint](https://eslint.org/).

\`\`\`sh
npm i -D eslint@${packageObject.devDependencies.eslint} @babel/core@${
  packageObject.dependencies['@babel/core']
} @babel/eslint-parser@${packageObject.dependencies['@babel/eslint-parser']}
# or
# yarn add -D eslint@${packageObject.devDependencies.eslint} @babel/core@${
  packageObject.dependencies['@babel/core']
} @babel/eslint-parser@${packageObject.dependencies['@babel/eslint-parser']}
\`\`\`

If you are using typescript, additional dependencies are needed.

\`\`\`sh
npm i -D typescript@${
  packageObject.dependencies.typescript
} @typescript-eslint/eslint-plugin@${
  packageObject.dependencies['@typescript-eslint/eslint-plugin']
} @typescript-eslint/parser@${
  packageObject.dependencies['@typescript-eslint/parser']
}
# or
# yarn add -D typescript@${
  packageObject.dependencies.typescript
} @typescript-eslint/eslint-plugin@${
  packageObject.dependencies['@typescript-eslint/eslint-plugin']
} @typescript-eslint/parser@${
  packageObject.dependencies['@typescript-eslint/parser']
}
\`\`\`

Set up \`\${PROJECT_DIR}/.eslintrc.js\`.

\`\`\`js
${eslintrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:script",
    "lint:script": "eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix"
  }
}

\`\`\`

When using \`vue-cli-service\`, \`eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix\` can be replaced with \`vue-cli-service lint --fix\`.

A \`\${PROJECT_DIR}/.eslintignore\` example [here](./config/.eslintignore).

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

\`\`\`sh
npm i -D stylelint@${packageObject.devDependencies.stylelint}
# or
# yarn add -D stylelint@${packageObject.devDependencies.stylelint}
\`\`\`

Set up \`\${PROJECT_DIR}/.stylelintrc.js\`.

\`\`\`js
${stylelintrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:style",
    "lint:style": "stylelint ./**/*.{css,less,sass,scss,vue} --fix"
  }
}

\`\`\`

A \`\${PROJECT_DIR}/.stylelintignore\` example [here](./config/.stylelintignore).

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint#readme).

\`\`\`sh
npm i -D markdownlint-cli@${packageObject.devDependencies['markdownlint-cli']}
# or
# yarn add -D markdownlint-cli@${
  packageObject.devDependencies['markdownlint-cli']
}
\`\`\`

Set up \`\${PROJECT_DIR}/.markdownlint.json\`.

\`\`\`json
${markdownlint}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:markdown",
    "lint:markdown": "markdownlint . --fix"
  }
}

\`\`\`

A \`\${PROJECT_DIR}/.markdownlintignore\` example [here](./config/.markdownlintignore).

### LintMD

Learn about [LintMD](https://github.com/lint-md/lint-md#readme), which aims at Chinese markdown files.

\`\`\`sh
npm i -D lint-md-cli@${packageObject.devDependencies['lint-md-cli']}
# or
# # yarn add -D lint-md-cli@${packageObject.devDependencies['lint-md-cli']}
\`\`\`

Set up \`\${PROJECT_DIR}/.lintmdrc\`.

\`\`\`sh
${lintmdrc}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:markdown",
    "lint:markdown": "lint-md . --fix"
  }
}

\`\`\`

Attention: when I try to migrate to \`@lint-md/cli\`, I get an error \`env: node\\r: No such file or directory\`. If you have any idea, please help me.

### LsLint

Learn about [LsLint](https://ls-lint.org/).

\`\`\`sh
npm i -D @ls-lint/ls-lint@${packageObject.devDependencies['@ls-lint/ls-lint']}
# or
# yarn add -D @ls-lint/ls-lint@${
  packageObject.devDependencies['@ls-lint/ls-lint']
}
\`\`\`

Set up \`\${PROJECT_DIR}/.ls-lint.yml\`.

\`\`\`yml
${lsLint}
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:ls",
    "lint:ls": "ls-lint ."
  }
}

\`\`\`

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/).

\`\`\`sh
npm i -D @commitlint/cli@${packageObject.devDependencies['@commitlint/cli']}
# or
# yarn add -D @commitlint/cli@${
  packageObject.devDependencies['@commitlint/cli']
}
\`\`\`

Set up \`\${PROJECT_DIR}/.commitlintrc.js\`.

\`\`\`js
${commitlintrc}
\`\`\`

You may also want to try [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog#readme) or [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

\`\`\`sh
npm i -D commitizen@${packageObject.devDependencies.commitizen}
# or
# yarn add -D commitizen@${packageObject.devDependencies.commitizen}
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

You may also want to try [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog#readme) or [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged#readme).

\`\`\`sh
npm install -D lint-staged@${packageObject.devDependencies['lint-staged']}
# or
# yarn add -D lint-staged@${packageObject.devDependencies['lint-staged']}

\`\`\`

Set up \`\${PROJECT_DIR}/.lintstagedrc.js\`.

\`\`\`js
module.exports = {
  '*.json': 'prettier --write',
  '*.{css,less,sass,scss,vue}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{md,markdown}': 'markdownlint --fix && lint-md --fix',
};

\`\`\`

When using \`vue-cli-service\`, \`eslint --fix\` can be replaced with \`vue-cli-service lint --fix\`.

### Husky

Learn about [Husky](https://github.com/typicode/husky#readme).

\`\`\`sh
npm install -D is-ci@${packageObject.devDependencies['is-ci']} husky@${
  packageObject.devDependencies.husky
}
# or
# yarn add -D is-ci@${packageObject.devDependencies['is-ci']} husky@${
  packageObject.devDependencies.husky
}

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

npx --no-install ls-lint . && npx --no-install lint-staged

\`\`\`

Finally use \`chmod\`.

\`\`\`sh
chmod +x .git/hooks/*
chmod +x .husky/*
\`\`\`

If you want to use \`husky@4\`, steps are shown below.

\`\`\`sh
npm i -D husky@~4.3.8
# or
# yarn add -D husky@~4.3.8
\`\`\`

Set up \`\${PROJECT_DIR}/package.json\`.

\`\`\`json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "ls-lint . && lint-staged"
    }
  }
}

\`\`\`

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
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

## Acknowledge

Sorted according to alphabetical order.

- [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css#readme)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react#readme)
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
