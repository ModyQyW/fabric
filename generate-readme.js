const fs = require('fs');
const path = require('path');

const getFilePath = (filename) => {
  const shortFilename = filename.slice(
    0,
    filename.lastIndexOf('.') === 0 ? undefined : filename.lastIndexOf('.'),
  );
  const shortFilenameExamplePath = path.join(__dirname, 'examples', `${shortFilename}-example`);
  const filenameExamplePath = path.join(__dirname, 'examples', `${shortFilename}-example`);
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

Requires:

- Latest Node 12/14/16
- Latest npm 6/7/8
- Set \`shamefully-hoist=true\` in \`.npmrc\` if using latest pnpm 6 instead of npm
- Set \`nodeLinker: 'node-modules'\` in \`.yarnrc.yml\` if using latest yarn 2/3 instead of npm

Using \`pnpm\` in examples below. Check [nrm](https://github.com/Pana/nrm) for mirror support.

[Github](${pkg.homepage}) | [Gitee](${pkg.homepage.replace('github', 'gitee')})

## Usage

\`\`\`sh
# locally
pnpm install -D ${pkg.name}@~${pkg.version}

# globally
pnpm install -g ${pkg.name}@~${pkg.version}
\`\`\`

See more about version [here](https://github.com/npm/node-semver).

### CLI

CLI is used to config your new projects easier.

\`\`\`sh
# if you install globally
# in current dir
mo-fabric config
# specify PROJECT_DIR
mo-fabric config ./

# if you install locally
# in current dir
./node_modules/.bin/mo-fabric config
\`\`\`

**CLI will not keep your original configs. Use CLI in old projects on your own risk.**

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- CSS/LESS/SCSS/SASS - [BEM](http://getbem.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/), [SMACSS](http://smacss.com/)

Besides, you can learn naming from some open-source projects.

In my opinion, simplicity and clarity are the highest priority for naming.

### Git

Learn about [Git](https://git-scm.com/doc), [Git flow](https://nvie.com/posts/a-successful-git-branching-model/), [Github flow](https://guides.github.com/introduction/flow/), [Gitlab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) and [Gif LFS](https://git-lfs.github.com/).

\`\`\`sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
\`\`\`

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [Gitee](https://gitee.com/).

Set up \`.gitattributes\`.

\`\`\`sh
${gitattributes}
\`\`\`

A better \`.gitattributes\` example [here](https://stackoverflow.com/a/32278635).

A \`.gitignore\` example [here](./.gitignore).

### EditorConfig

Learn about [EditorConfig](https://editorconfig.org/).

Set up \`.editorconfig\`.

\`\`\`sh
${editorconfig}
\`\`\`

### tsconfig.json (beta)

Learn about [tsconfig.json](https://aka.ms/tsconfig.json).

Just \`extends\` in most time.

\`\`\`json
{
  "extends": "@modyqyw/fabric/tsconfig.base.json"
}

\`\`\`

Override it when necessary.

\`\`\`json
{
  "extends": "@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    "types": [
      "vite/client",
      "vite-plugin-pages/client",
      "vite-plugin-vue-layouts/client"
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
\`\`\`

See [tsconfig.base.json](./tsconfig.base.json) for default configs.

### Prettier

Learn about [Prettier](https://prettier.io/).

\`\`\`sh
pnpm install -D prettier@${getDependencyVersion('prettier')}
\`\`\`

It it recommended to pin \`prettier@~2.2.1\`, if you are using TailwindCSS or WindiCSS without attributify mode. See [Prettier#10918](https://github.com/prettier/prettier/issues/10918).

Set up \`.prettierrc.js\`.

\`\`\`js
${prettierrc}
\`\`\`

### ESLint

Learn about [ESLint](https://eslint.org/). Prettier is required.

\`\`\`sh
pnpm install -D eslint@${getDependencyVersion('eslint')} @babel/core@${getDependencyVersion(
  '@babel/core',
)} @babel/eslint-parser@${getDependencyVersion('@babel/eslint-parser')}
\`\`\`

If you are using typescript, additional dependencies are needed.

\`\`\`sh
pnpm install -D typescript@${getDependencyVersion(
  'typescript',
)} @typescript-eslint/eslint-plugin@${getDependencyVersion(
  '@typescript-eslint/eslint-plugin',
)} @typescript-eslint/parser@${getDependencyVersion('@typescript-eslint/parser')}
\`\`\`

Set up \`.eslintrc.js\`.

\`\`\`js
${eslintrc}
\`\`\`

Set up \`package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "pnpm run lint:eslint",
    "lint:eslint": "eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore"
  }
}

\`\`\`

When using \`vue-cli-service\`, \`eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore\` can be replaced with \`vue-cli-service lint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore\`.

You should declare \`paths\` in \`tsconfig.json\` if you are using path aliases.

### Stylelint

Learn about [Stylelint](https://stylelint.io/). Prettier is required.

\`\`\`sh
pnpm install -D stylelint@${getDependencyVersion('stylelint')}
\`\`\`

Set up \`.stylelintrc.js\`.

\`\`\`js
${stylelintrc}
\`\`\`

Set up \`package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "pnpm run lint:stylelint",
    "lint:stylelint": "stylelint \\"./**/*.{css,less,scss,sass,vue}\\" --fix --allow-empty-input --ignore-path=.gitignore"
  }
}

\`\`\`

Check your Postcss version, which should be 7, if you are facing problems.

Install Postcss by yourself / [npm overrides](https://github.com/npm/rfcs/blob/main/accepted/0036-overrides.md) / [yarn resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/) / [pnpm overrides](https://pnpm.io/package_json#pnpmoverrides) may help.

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint).

\`\`\`sh
pnpm install -D markdownlint-cli@${getDependencyVersion('markdownlint-cli')}
\`\`\`

Set up \`.markdownlint.json\`.

\`\`\`json
${markdownlint}
\`\`\`

Set up \`package.json\`. Use \`.gitignore\` as the ignore pattern file here.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "lint": "pnpm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}

\`\`\`

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/).

\`\`\`sh
pnpm install -D @commitlint/cli@${getDependencyVersion('@commitlint/cli')}
\`\`\`

Set up \`.commitlintrc.js\`.

\`\`\`js
${commitlintrc}
\`\`\`

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

\`\`\`sh
pnpm install -D commitizen@${getDependencyVersion('commitizen')}
\`\`\`

Set up \`package.json\`.

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
pnpm install -D lint-staged@${getDependencyVersion('lint-staged')}

\`\`\`

Set up \`.lintstagedrc.js\`.

\`\`\`js
module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{css,less,scss,sass,vue}': 'stylelint --fix',
};

\`\`\`

When using \`vue-cli-service\`, \`eslint --fix\` can be replaced with \`vue-cli-service lint --fix\`.

### Husky

Learn about [Husky](https://github.com/typicode/husky).

\`\`\`sh
pnpm install -D is-ci@${getDependencyVersion('is-ci')} husky@${getDependencyVersion('husky')}

npx husky install

\`\`\`

Set up \`package.json\`.

\`\`\`json
{
  ...,
  "scripts": {
    ...,
    "prepare": "is-ci || husky install"
  }
}

\`\`\`

Set up \`.husky/commit-msg\` hook.

\`\`\`sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

\`\`\`

Set up \`.husky/pre-commit\` hook.

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
- [standard-version](https://github.com/conventional-changelog/standard-version)

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 0.x version
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - For vue3 and vue2, extra configs required if for vue2
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - For vue2
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - If you are dealing with uni-*
- Set up \`Settings.json\`.

\`\`\`json
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.rulers": [{ "column": 100 }],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
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
  "[html]": {
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[less]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[sass]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "editor.defaultFormatter": "octref.vetur",
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.formatOnSave": true
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true,
    }
  },
  "[yaml]": {
    "editor.formatOnSave": true
  }
}
\`\`\`

If you are using Volar, remember to remove \`"editor.defaultFormatter": "octref.vetur",\`.

## Migrate

### Migrate 3.x from 2.x

- Upgrade your node version to ^12.22.6, ^14.17.6 or ^16.8.0.
- Upgrade your npm version to ^6.14.15 or ^7.21.0.
- Support CommonJS require and ESM import.
- Prettier/ESLint/Stylelint/Commitlint config changed.

\`\`\`js
const { prettier, eslint, stylelint, commitlint } = require('@modyqyw/fabric');

...

\`\`\`

- Use \`eslint.vanilla\` instead of \`eslint.native\`.
- Use \`stylelint.scss\` instead of \`stylelint.sass\`.

### Migrate 2.x from 1.x

Just upgrade your node and dependencies versions.

## Examples

See [dependency graph](https://github.com/ModyQyW/fabric/network/dependents?package_id=UGFja2FnZS0xNTg3ODMzNDM2).

## Acknowledge

Sorted according to alphabetical order.

- [AlloyTeam - eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- [antfu - eslint-config](https://github.com/antfu/eslint-config)
- [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Code Guide](https://codeguide.co/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [standardjs](https://standardjs.com/)
- [TypeScript Deep Dive - TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
`;

fs.writeFileSync('README.md', readme);
