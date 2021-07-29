# @modyqyw/fabric

Opinionated shareable specification for different JavaScript/TypeScript projects.

Node.js 10+ and npm 6+ are required.

[Plan](https://github.com/ModyQyW/fabric/issues/2)

[Github](https://github.com/ModyQyW/fabric#readme) | [Gitee](https://gitee.com/ModyQyW/fabric#readme)

## Usage

Using `npm` below. You can use [pnpm](https://pnpm.io/) or [yarn](https://classic.yarnpkg.com/) instead.

```sh
# locally
npm i -D @modyqyw/fabric@~1.40.0

# globally
npm i -g @modyqyw/fabric@~1.40.0
```

Use `@legacy` for legacy version, which supports Node.js 10+ and npm6+.

```sh
# locally
npm i -D @modyqyw/fabric@legacy

# globally
npm i -g @modyqyw/fabric@legacy
```

### CLI (beta)

**This is still a beta feature and may cause your project to crash. Please use it in your new projects and give feedback. It will get smarter in the foreseeable future.**

CLI is used to config your project easier. Just call it after installing globally.

```sh
# in current dir
modyqyw-fabric config
# specify PROJECT_DIR
modyqyw-fabric config ./
```

Or, you can use scripts in `${PROJECT_DIR}package.json` if you install locally.

```json
{
  ...,
  "scripts": {
    ...,
    "config": "modyqyw-fabric config"
  }
}

```

```sh
npm run config
```

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet#readme)
- CSS/LESS/SASS/SCSS - [BEM](http://getbem.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/), [SMACSS](http://smacss.com/)

Besides, you can learn naming from some open-source projects, such as [Vuetify](https://vuetifyjs.com/), [MaterialUI](https://material-ui.com/), [Bootstrap](https://getbootstrap.com/), [TailwindCSS](https://tailwindcss.com/) and [Bulma](https://bulma.io/).

In my opinion, simplicity and clarity are the highest priority for naming.

### Git

Learn about [Git](https://git-scm.com/doc), [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) and [GifLFS](https://git-lfs.github.com/).

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [Gitee](https://gitee.com/).

Set up `${PROJECT_DIR}/.gitattributes`.

```sh
* text=auto

```

A better `${PROJECT_DIR}/.gitattributes` example [here](https://stackoverflow.com/a/32278635).

A `${PROJECT_DIR}/.gitignore` example [here](./.gitignore).

### EditorConfig

Learn about [EditorConfig](https://editorconfig.org/).

Set up `${PROJECT_DIR}/.editorconfig`.

```sh
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

### Prettier

Learn about [Prettier](https://prettier.io/).

```sh
npm i -D prettier@~2.3.2
```

Set up `${PROJECT_DIR}/.prettierrc.js`.

```js
const config = require('@modyqyw/fabric/prettier');

module.exports = {
  ...config,
};

```

Set up `${PROJECT_DIR}/package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:json",
    "lint:json": "prettier ./**/*.json --write --ignore-path=.gitignore"
  }
}

```

### ESLint

Learn about [ESLint](https://eslint.org/).

```sh
npm i -D eslint@~7.31.0 @babel/core@~7.14.8 @babel/eslint-parser@~7.14.7
```

If you are using typescript, additional dependencies are needed.

```sh
npm i -D typescript@~4.3.5 @typescript-eslint/eslint-plugin@~4.28.5 @typescript-eslint/parser@~4.28.5
```

Set up `${PROJECT_DIR}/.eslintrc.js`.

```js
// for js and ts
const config = require('@modyqyw/fabric/eslint/native');

// for react17
// with js or ts
// const config = require('@modyqyw/fabric/eslint/react');

// for vue2 with js
// const config = require('@modyqyw/fabric/eslint/vue2');

// for vue2 with ts
// const config = require('@modyqyw/fabric/eslint/vue2-typescript');

// for vue3 with js
// const config = require('@modyqyw/fabric/eslint/vue3');

// for vue3 with ts
// const config = require('@modyqyw/fabric/eslint/vue3-typescript');

module.exports = {
  ...config,
};

```

Set up `${PROJECT_DIR}/package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:script",
    "lint:script": "eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore"
  }
}

```

When using `vue-cli-service`, `eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore` can be replaced with `vue-cli-service lint --fix`.

You should declare `paths` in `jsconfig.json` or `tsconfig.json` if you are using path aliases.

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

```sh
npm i -D stylelint@~13.13.1
```

Set up `${PROJECT_DIR}/.stylelintrc.js`.

```js
// for css
const config = require('@modyqyw/fabric/stylelint/css');

// for less
// const config = require('@modyqyw/fabric/stylelint/less');

// for sass
// const config = require('@modyqyw/fabric/stylelint/sass');

// for scss
// const config = require('@modyqyw/fabric/stylelint/scss');

module.exports = {
  ...config,
};

```

Set up `${PROJECT_DIR}/package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:style",
    "lint:style": "stylelint ./**/*.{css,less,sass,scss,vue} --fix --ignore-path=.gitignore"
  }
}

```

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint#readme).

```sh
npm i -D markdownlint-cli@~0.28.1
```

Set up `${PROJECT_DIR}/.markdownlint.json`.

```json
{
  "MD003": false,
  "MD013": false,
  "MD022": false,
  "MD024": false,
  "MD025": false,
  "MD033": false
}

```

Set up `${PROJECT_DIR}/package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:markdown",
    "lint:markdown": "markdownlint . --fix --ignore-path=.gitignore"
  }
}

```

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/).

```sh
npm i -D @commitlint/cli@~12.1.4
```

Set up `${PROJECT_DIR}/.commitlintrc.js`.

```js
const config = require('@modyqyw/fabric/commitlint');

module.exports = {
  ...config,
};

```

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

```sh
npm i -D commitizen@~4.2.4
```

Set up `${PROJECT_DIR}/package.json`.

```json
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

```

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged#readme).

```sh
npm install -D lint-staged@~10.5.4

```

Set up `${PROJECT_DIR}/.lintstagedrc.js`.

```js
module.exports = {
  '*.json': 'prettier --write',
  '*.{css,less,sass,scss,vue}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{md,markdown}': 'markdownlint --fix',
};

```

When using `vue-cli-service`, `eslint --fix` can be replaced with `vue-cli-service lint --fix`.

### Husky

Learn about [Husky](https://github.com/typicode/husky#readme).

```sh
npm install -D is-ci@~3.0.0 husky@~6.0.0

npx husky install

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "prepare": "is-ci || husky install"
  }
}

```

Set up `${PROJECT_DIR}/.husky/commit-msg` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

```

Set up `${PROJECT_DIR}/.husky/pre-commit` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged

```

Finally use `chmod`.

```sh
chmod +x .git/hooks/*
chmod +x .husky/*
```

If you want to use `husky@4`, steps are shown below.

```sh
npm i -D husky@~4.3.8
```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  }
}

```

### Deploy

Experience has proven that automation is the best option. You may want to try packages below, sorted according to alphabetical order.

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog#readme)
- [np](https://github.com/sindresorhus/np#readme)
- [release](https://github.com/vercel/release#readme)
- [release-it](https://github.com/release-it/release-it#readme)
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
- Set up `Settings.json`. Then `F1 => File: Save`.

```json
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
  "files.eol": "\n",
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
```

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
