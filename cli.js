#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const inquirer = require('inquirer');
const picocolors = require('picocolors');
const shell = require('shelljs');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const program = new Command();

const indent = '  ';

const getCliDependencyVersion = (dependency) =>
  pkg.dependencies[dependency] || pkg.devDependencies[dependency] || 'latest';

// Log hint
console.log(picocolors.cyan(`\nmo-fabric v${pkg.version} is running in ${process.cwd()} now.\n`));

// Verify node version
const [nodeMajorVersion] = process.versions.node
  .split('.')
  .map((item) => Number.parseInt(item, 10));
if (nodeMajorVersion < 12 || nodeMajorVersion % 2 !== 0 || Number.isNaN(nodeMajorVersion)) {
  console.log(
    picocolors.red(`
You are using a unsupported node.js version.
Please upgrade your node.js version to latest 12/14/16.
See https://nodejs.org.

You may need nvm, nvs or fnm.
nvm: https://github.com/nvm-sh/nvm
nvm-windows: https://github.com/coreybutler/nvm-windows
nvs: https://github.com/jasongin/nvs
fnm: https://github.com/Schniz/fnm
`),
  );
  shell.exit(1);
}

// Confirm package manager
let pkgManager = 'npm';
if (fs.existsSync('pnpm-lock.yaml')) {
  pkgManager = 'pnpm';
  if (!shell.which('pnpm')) {
    shell.exec('npm i -g pnpm');
  }
} else if (fs.existsSync('yarn.lock')) {
  pkgManager = 'yarn';
  if (!shell.which('yarn')) {
    shell.exec('npm i -g yarn');
  }
} else if (fs.existsSync('package-lock.json')) {
  pkgManager = 'npm';
} else if (shell.which('pnpm')) {
  pkgManager = 'pnpm';
} else if (shell.which('yarn')) {
  pkgManager = 'yarn';
} else {
  pkgManager = 'npm';
}

// Version
program.version(pkg.version, '-v, --version');

// Command config
program
  .command('config [directory]')
  .description('Config different packages for formatting and linting.')
  .action(async (directory = '.') => {
    try {
      // If the project has no package.json, init one
      if (!fs.existsSync(path.resolve(directory, 'package.json'))) {
        shell.exec('npm init -y');
      }

      // Lint items
      const lintItems = [];

      // Read project package.json
      const pkgObj = JSON.parse(fs.readFileSync(path.resolve(directory, 'package.json')));
      pkgObj.dependencies = pkgObj.dependencies || {};
      pkgObj.devDependencies = pkgObj.devDependencies || {};

      // Ask for information
      const { framework, config, setTypeModule, setTsconfig, css } = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Select a framework',
          default: 'vanilla',
          choices: [
            { name: 'Vanilla', value: 'vanilla' },
            { name: 'React 17', value: 'react' },
            { name: 'Vue 2', value: 'vue2' },
            { name: 'Vue 2 with TypeScript', value: 'vue2Typescript' },
            { name: 'Vue 3', value: 'vue3' },
            { name: 'Vue 3 With TypeScript', value: 'vue3Typescript' },
            { name: 'Svelte', value: 'svelte' },
            { name: 'Svelte with Typescript', value: 'svelteTypescript' },
          ],
        },
        {
          type: 'checkbox',
          name: 'config',
          message: 'Select configs',
          default: [
            'git',
            'editorconfig',
            'prettier',
            'eslint',
            'stylelint',
            'markdownlint',
            'commitlint',
            'commitizen',
            'lint-staged',
            'husky',
          ],
          choices: [
            { name: 'Git', value: 'git' },
            { name: 'EditorConfig', value: 'editorconfig' },
            { name: 'Prettier', value: 'prettier' },
            { name: 'ESLint (needs Prettier)', value: 'eslint' },
            { name: 'Stylelint (needs Prettier)', value: 'stylelint' },
            { name: 'Markdownlint', value: 'markdownlint' },
            { name: 'Commitlint', value: 'commitlint' },
            { name: 'Commitizen', value: 'commitizen' },
            { name: 'LintStaged', value: 'lint-staged' },
            { name: 'Husky', value: 'husky' },
          ],
        },
        {
          type: 'confirm',
          name: 'setTypeModule',
          message: 'Set up "type": "module"?',
          default: false,
        },
        {
          type: 'confirm',
          name: 'setTsconfig',
          message: 'Set up tsconfig.json?',
          default: false,
        },
        {
          type: 'list',
          name: 'css',
          message: 'Select css pre-processor',
          when: (answers) => answers.config.includes('stylelint'),
          default: 'css',
          choices: [
            { name: 'CSS', value: 'css' },
            { name: 'LESS', value: 'less' },
            { name: 'SCSS / SASS', value: 'scss' },
          ],
        },
      ]);

      // Set @modyqyw/fabric
      pkgObj.devDependencies = {
        ...pkgObj.devDependencies,
        '@modyqyw/fabric': `~${pkg.version}`,
      };

      // Set git
      if (config.includes('git')) {
        if (!shell.which('git')) {
          console.log(picocolors.red(`\nPlease install Git first.\n`));
          shell.exit(1);
        }
        shell.exec('git config --global core.autocrlf false');
        shell.exec('git config --global init.defaultBranch main');
        if (!fs.existsSync(path.resolve(directory, '.git'))) {
          shell.exec('git init');
        }
        fs.writeFileSync(
          path.resolve(directory, '.gitattributes'),
          `* text=auto
`,
        );
        fs.writeFileSync(
          path.resolve(directory, '.gitignore'),
          `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
pnpm-debug.log*
run

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules
jspm_packages

# Snowpack dependency directory (https://snowpack.dev/)
web_modules

# Temp directory
.temp
.tmp

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache
.rts2_cache_cjs
.rts2_cache_es
.rts2_cache_umd

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test
.env.*.test
.env.local
.env.*.local
*.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Electron
dist-electron
dist_electron

# Tauri
dist-tauri
dist_tauri

# Cordova
dist-cordova
dist_cordova

# Capacitor
dist-capacitor
dist_capacitor

# Next.js build output
.next
out

# Umi.js build output
.umi
.umi-production
.umi-test

# Nuxt.js build / generate output
.nuxt
dist

# Rax.js build
.rax

# vuepress build output
.vuepress/dist

# ssr
dist-ssr
dist_ssr

# ssg
dist-ssg
dist_ssg

# Serverless
.serverless
.dynamodb
.s3
.buckets
.seeds

# FuseBox cache
.fusebox

# TernJS port file
.tern-port

# Editor
.vscode-test
.vscode
!.vscode/extensions.json
*.vsix
.idea
.hbuilder
.hbuilderx
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

# Apple
.DS_Store
*.p12
*.mobileprovision

# Android
*.keystore
`,
        );
      }

      // Set editorconfig
      if (config.includes('editorconfig')) {
        fs.writeFileSync(
          path.resolve(directory, '.editorconfig'),
          `root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
`,
        );
      }

      // Set tsconfig.json
      if (setTsconfig) {
        fs.writeFileSync(
          path.resolve(directory, 'tsconfig.json'),
          `{
  "extends": "./node_modules/@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "preserve",
    "paths": {},
    "types": [],
    "target": "ESNext"
  },
  "include": [
    "./**/.*.js",
    "./**/.*.cjs",
    "./**/.*.mjs",
    "./**/*.js",
    "./**/*.cjs",
    "./**/*.mjs",
    "./**/*.jsx",
    "./**/.*.ts",
    "./**/.*.cts",
    "./**/.*.mts",
    "./**/*.ts",
    "./**/*.cts",
    "./**/*.mts",
    "./**/*.tsx",
    "./**/*.vue",
    "./**/*.svelte"
  ],
  "exclude": [".cache", ".temp", ".tmp", "dist*", "node_modules"]
}
`,
        );
      }

      // Set prettier
      if (
        config.includes('prettier') ||
        config.includes('eslint') ||
        config.includes('stylelint')
      ) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          prettier: getCliDependencyVersion('prettier'),
        };
        delete pkgObj.prettier;
        delete pkgObj.prettierConfig;
        delete pkgObj.prettierIgnore;
        shell.rm(
          '-rf',
          path.resolve(directory, '.prettierrc'),
          path.resolve(directory, '.prettierrc.json'),
          path.resolve(directory, '.prettierrc.yml'),
          path.resolve(directory, '.prettierrc.yaml'),
          path.resolve(directory, '.prettierrc.json5'),
          path.resolve(directory, '.prettierrc.js'),
          path.resolve(directory, '.prettierrc.cjs'),
          path.resolve(directory, 'prettier.config.js'),
          path.resolve(directory, 'prettier.config.cjs'),
          path.resolve(directory, '.prettierrc.toml'),
          path.resolve(directory, '.prettierignore'),
        );
        fs.writeFileSync(
          path.resolve(directory, `.prettierrc.${setTypeModule ? 'cjs' : 'js'}`),
          `const { prettier } = require('@modyqyw/fabric');

module.exports = {
  ...prettier,
};
`,
        );
      }

      // Set eslint
      if (config.includes('eslint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@babel/core': getCliDependencyVersion('@babel/core'),
          '@babel/eslint-parser': getCliDependencyVersion('@babel/eslint-parser'),
          '@typescript-eslint/eslint-plugin': getCliDependencyVersion(
            '@typescript-eslint/eslint-plugin',
          ),
          '@typescript-eslint/parser': getCliDependencyVersion('@typescript-eslint/parser'),
          eslint: getCliDependencyVersion('eslint'),
          typescript: getCliDependencyVersion('typescript'),
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:eslint':
            'eslint . --fix --ext=.js,.cjs,.mjs,.jsx,.ts,.cts,.mts,.tsx,.vue,.svelte --ignore-path=.gitignore',
        };
        lintItems.push(`${pkgManager} run lint:eslint`);
        delete pkgObj.eslint;
        delete pkgObj.eslintConfig;
        delete pkgObj.eslintIgnore;
        shell.rm(
          '-rf',
          path.resolve(directory, '.eslintrc'),
          path.resolve(directory, '.eslintrc.js'),
          path.resolve(directory, '.eslintrc.cjs'),
          path.resolve(directory, '.eslintrc.yaml'),
          path.resolve(directory, '.eslintrc.yml'),
          path.resolve(directory, '.eslintrc.json'),
          path.resolve(directory, '.eslintignore'),
        );
        fs.writeFileSync(
          path.resolve(directory, `.eslintrc.${setTypeModule ? 'cjs' : 'js'}`),
          `const { eslint } = require('@modyqyw/fabric');

module.exports = {
  ...eslint.${framework},
};
`,
        );
      }

      // Set stylelint
      if (config.includes('stylelint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          stylelint: getCliDependencyVersion('stylelint'),
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:stylelint':
            // eslint-disable-next-line prettier/prettier, no-useless-escape
            'stylelint "./**/*.{css,less,scss,sass,vue,svelte}" --fix --allow-empty-input --ignore-path=.gitignore',
        };
        lintItems.push(`${pkgManager} run lint:stylelint`);
        delete pkgObj.stylelint;
        delete pkgObj.stylelintConfig;
        delete pkgObj.stylelintIgnore;
        shell.rm(
          '-rf',
          path.resolve(directory, '.stylelintrc'),
          path.resolve(directory, '.stylelintrc.js'),
          path.resolve(directory, '.stylelintrc.cjs'),
          path.resolve(directory, 'stylelint.config.js'),
          path.resolve(directory, 'stylelint.config.cjs'),
          path.resolve(directory, '.stylelintrc.json'),
          path.resolve(directory, '.stylelintrc.yaml'),
          path.resolve(directory, '.stylelintrc.yml'),
          path.resolve(directory, '.stylelintignore'),
        );
        fs.writeFileSync(
          path.resolve(directory, `.stylelintrc.${setTypeModule ? 'cjs' : 'js'}`),
          `const { stylelint } = require('@modyqyw/fabric');

module.exports = {
  ...stylelint.${css},
};
`,
        );
      }

      // Set markdownlint
      if (config.includes('markdownlint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          'markdownlint-cli': getCliDependencyVersion('markdownlint-cli'),
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:markdownlint': 'markdownlint . --fix --ignore-path=.gitignore',
        };
        lintItems.push(`${pkgManager} run lint:markdownlint`);
        shell.rm(
          '-rf',
          path.resolve(directory, '.markdownlint.yaml'),
          path.resolve(directory, '.markdownlint.yml'),
          path.resolve(directory, '.markdownlintrc'),
          path.resolve(directory, '.markdownlintrc.json'),
          path.resolve(directory, '.markdownlintignore'),
        );
        fs.writeFileSync(
          path.resolve(directory, '.markdownlint.json'),
          `{
  "MD003": false,
  "MD013": false,
  "MD022": false,
  "MD024": false,
  "MD025": false,
  "MD033": false,
  "MD050": false
}
`,
        );
      }

      // Set commitlint
      if (config.includes('commitlint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@commitlint/cli': getCliDependencyVersion('@commitlint/cli'),
        };
        delete pkgObj.commitlint;
        shell.rm(
          '-rf',
          path.resolve(directory, '.commitlintrc'),
          path.resolve(directory, '.commitlintrc.js'),
          path.resolve(directory, '.commitlintrc.cjs'),
          path.resolve(directory, '.commitlintrc.json'),
          path.resolve(directory, '.commitlintrc.yml'),
          path.resolve(directory, 'commitlint.config.js'),
          path.resolve(directory, 'commitlint.config.cjs'),
        );
        fs.writeFileSync(
          path.resolve(directory, `.commitlintrc.${setTypeModule ? 'cjs' : 'js'}`),
          `const { commitlint } = require('@modyqyw/fabric');

module.exports = {
  ...commitlint,
};
`,
        );
      }

      // Set commitizen
      if (config.includes('commitizen')) {
        pkgObj.scripts = {
          ...pkgObj.scripts,
          commit: 'git-cz',
        };
        pkgObj.config = {
          ...pkgObj.config,
          commitizen: {
            path: './node_modules/@commitlint/cz-commitlint',
          },
        };
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          commitizen: getCliDependencyVersion('commitizen'),
        };
      }

      // Set lint-staged
      if (config.includes('lint-staged')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          'lint-staged': getCliDependencyVersion('lint-staged'),
        };
        delete pkgObj['lint-staged'];
        shell.rm(
          '-rf',
          path.resolve(directory, '.lintstagedrc'),
          path.resolve(directory, '.lintstagedrc.json'),
          path.resolve(directory, '.lintstagedrc.yaml'),
          path.resolve(directory, '.lintstagedrc.yml'),
          path.resolve(directory, 'lint-staged.config.js'),
          path.resolve(directory, 'lint-staged.config.cjs'),
          path.resolve(directory, '.lintstagedrc.js'),
          path.resolve(directory, '.lintstagedrc.cjs'),
        );
        const lintStagedObject = {};
        if (config.includes('markdownlint')) {
          lintStagedObject['*.md'] = 'markdownlint --fix';
        }
        if (config.includes('eslint')) {
          lintStagedObject['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}'] = 'eslint --fix';
        }
        if (config.includes('stylelint')) {
          lintStagedObject['*.{css,less,scss,sass,vue,svelte}'] = 'stylelint --fix';
        }
        const lintStagedArray = Object.keys(lintStagedObject)
          .sort()
          .reduce((acc, cur) => {
            acc.push(`${indent}'${cur}': '${lintStagedObject[cur]}',\n`);
            return acc;
          }, []);
        fs.writeFileSync(
          path.resolve(directory, `.lintstagedrc.${setTypeModule ? 'cjs' : 'js'}`),
          `module.exports = {\n${lintStagedArray.join('')}};\n`,
        );
      }

      // Set husky
      if (config.includes('husky')) {
        pkgObj.scripts = {
          ...pkgObj.scripts,
          prepare: 'is-ci || husky install',
        };
        delete pkgObj.husky;
        delete pkgObj.gitHooks;
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          husky: getCliDependencyVersion('husky'),
          'is-ci': getCliDependencyVersion('is-ci'),
        };
        if (!fs.existsSync(path.resolve(directory, '.husky'))) {
          shell.mkdir(path.resolve(directory, '.husky'));
        }
        if (config.includes('commitlint')) {
          fs.writeFileSync(
            path.resolve(directory, '.husky', 'commit-msg'),
            `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit $1\n`,
          );
        }
        if (config.includes('lint-staged')) {
          fs.writeFileSync(
            path.resolve(directory, '.husky', 'pre-commit'),
            `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install lint-staged\n`,
          );
        }
        shell.chmod('+x', path.resolve(directory, '.husky', '*'));
      }

      // Write package.json
      pkgObj.devDependencies = Object.fromEntries(
        Object.keys(pkgObj.devDependencies).map((cur) => [cur, pkgObj.devDependencies[cur]]),
      );
      pkgObj.scripts = {
        ...pkgObj.scripts,
        lint: [...new Set(lintItems.sort())].join(' && '),
      };
      pkgObj.scripts = Object.fromEntries(
        Object.keys(pkgObj.scripts).map((cur) => [cur, pkgObj.scripts[cur]]),
      );
      fs.writeFileSync(
        path.resolve(directory, 'package.json'),
        `${JSON.stringify(pkgObj, null, indent)}\n`,
      );
      shell.exec(`npx sort-package-json`);

      // Set .npmrc / .yarnrc.yml
      if (pkgManager === 'pnpm') {
        fs.writeFileSync(path.resolve(directory, '.npmrc'), `shamefully-hoist=true\n`);
      } else if (
        pkgManager === 'yarn' &&
        ['2', '3'].includes(shell.exec('yarn -v', { silent: true }).stdout[0])
      ) {
        fs.writeFileSync(path.resolve(directory, '.yarnrc.yml'), `nodeLinker: 'node-modules'\n`);
      }

      // Install dependencies
      console.log(picocolors.cyan('\nInstalling dependencies...\n'));
      shell.cd(path.resolve(directory));
      if (
        pkgManager === 'npm' &&
        ['7', '8'].includes(shell.exec('npm -v', { silent: true }).stdout[0])
      ) {
        shell.exec(`${pkgManager} install --legacy-peer-deps`);
      } else {
        shell.exec(`${pkgManager} install`);
      }
      shell.chmod('+x', path.resolve(directory, '.git', 'hooks', '*'));
      if (shell.cd('-').code === 0) {
        console.log(
          picocolors.cyan(
            '\nDone! 🎉 Please confirm there are no bugs. Or, you can add an issue here: https://github.com/ModyQyW/fabric/issues/new. Thank you! :D\n',
          ),
        );
      }
    } catch (error) {
      shell.echo('Error:', error);
      // do something?
    }
  });

program.parse(process.argv);

/* eslint-enable no-console */
