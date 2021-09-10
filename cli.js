#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');
const pkg = require('./package.json');

const program = new Command();

const indent = '  ';

const getCliDependencyVersion = (dependency) =>
  pkg.dependencies[dependency] || pkg.devDependencies[dependency] || 'latest';

const getCliFilePath = (filename) => {
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

// Log hint
console.log(
  chalk.cyan(
    `\nmodyqyw-fabric v${pkg.version} is running in ${process.cwd()} now.\n`,
  ),
);

// Verify node version
const [nodeMajorVersion] = process.versions.node
  .split('.')
  .map((item) => Number.parseInt(item, 10));
if (
  nodeMajorVersion < 12 ||
  nodeMajorVersion % 2 !== 0 ||
  Number.isNaN(nodeMajorVersion)
) {
  console.log('');
  console.log(chalk.red('You are using a unsupported old node.js version.'));
  console.log(chalk.red('Please upgrade your node.js version to LTS.'));
  console.log(chalk.red('See https://nodejs.org.'));
  console.log(chalk.red('You may need n, nvm or nvs.'));
  console.log('');
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
} else if (shell.which('yarn')) {
  pkgManager = 'yarn';
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
      const pkgObj = JSON.parse(
        fs.readFileSync(path.resolve(directory, 'package.json'), {
          encoding: 'utf8',
        }),
      );
      pkgObj.dependencies = pkgObj.dependencies || {};
      pkgObj.devDependencies = pkgObj.devDependencies || {};
      // Ask for information
      const { framework, css, config } = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Select framework',
          default: 'vanilla',
          choices: [
            { name: 'Vanilla', value: 'vanilla' },
            { name: 'Vue 2', value: 'vue2' },
            { name: 'Vue 2 with TypeScript', value: 'vue2-typescript' },
            { name: 'Vue 3', value: 'vue3' },
            { name: 'Vue 3 With TypeScript', value: 'vue3-typescript' },
            { name: 'React 17', value: 'react' },
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
          console.log('');
          console.log(chalk.red('Please install Git in your system first.'));
          shell.exit(1);
        }
        shell.exec('git config --global core.autocrlf false');
        shell.exec('git config --global init.defaultBranch main');
        if (!fs.existsSync(path.resolve(directory, '.git'))) {
          shell.exec('git init');
        }
        fs.copyFileSync(
          getCliFilePath('.gitattributes'),
          path.resolve(directory, '.gitattributes'),
        );
        fs.copyFileSync(
          getCliFilePath('.gitignore'),
          path.resolve(directory, '.gitignore'),
        );
      }
      // Set editorconfig
      if (config.includes('editorconfig')) {
        fs.copyFileSync(
          getCliFilePath('.editorconfig'),
          path.resolve(directory, '.editorconfig'),
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
        shell.rm(
          '-rf',
          path.resolve(directory, '.prettierrc'),
          path.resolve(directory, '.prettierrc.json'),
          path.resolve(directory, '.prettierrc.yml'),
          path.resolve(directory, '.prettierrc.yaml'),
          path.resolve(directory, '.prettierrc.json5'),
          path.resolve(directory, '.prettierrc.cjs'),
          path.resolve(directory, 'prettier.config.js'),
          path.resolve(directory, 'prettier.config.cjs'),
          path.resolve(directory, '.prettierrc.toml'),
          path.resolve(directory, '.prettierignore'),
        );
        fs.copyFileSync(
          getCliFilePath('.prettierrc.js'),
          path.resolve(directory, '.prettierrc.js'),
        );
      }
      // Set eslint
      if (config.includes('eslint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@babel/core': getCliDependencyVersion('@babel/core'),
          '@babel/eslint-parser': getCliDependencyVersion(
            '@babel/eslint-parser',
          ),
          '@typescript-eslint/eslint-plugin': getCliDependencyVersion(
            '@typescript-eslint/eslint-plugin',
          ),
          '@typescript-eslint/parser': getCliDependencyVersion(
            '@typescript-eslint/parser',
          ),
          eslint: getCliDependencyVersion('eslint'),
          typescript: getCliDependencyVersion('typescript'),
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:eslint':
            pkgObj.dependencies['@vue/cli-service'] ||
            pkgObj.devDependencies['@vue/cli-service']
              ? 'vue-cli-service lint --fix'
              : 'eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue,.json,.jsonc,.json5 --ignore-path=.gitignore',
        };
        lintItems.push(`${pkgManager} run lint:eslint`);
        delete pkgObj.eslintConfig;
        delete pkgObj.eslintIgnore;
        shell.rm(
          '-rf',
          path.resolve(directory, '.eslintrc'),
          path.resolve(directory, '.eslintrc.cjs'),
          path.resolve(directory, '.eslintrc.yaml'),
          path.resolve(directory, '.eslintrc.yml'),
          path.resolve(directory, '.eslintrc.json'),
          path.resolve(directory, '.eslintignore'),
        );
        fs.copyFileSync(
          getCliFilePath(`.eslintrc-${framework}.js`),
          path.resolve(directory, '.eslintrc.js'),
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
            'stylelint ./**/*.{css,less,scss,vue} --fix --allow-empty-input --ignore-path=.gitignore',
        };
        lintItems.push(`${pkgManager} run lint:stylelint`);
        delete pkgObj.stylelint;
        shell.rm(
          '-rf',
          path.resolve(directory, '.stylelintrc'),
          path.resolve(directory, 'stylelint.config.js'),
          path.resolve(directory, 'stylelint.config.cjs'),
          path.resolve(directory, '.stylelintrc.json'),
          path.resolve(directory, '.stylelintrc.yaml'),
          path.resolve(directory, '.stylelintrc.yml'),
          path.resolve(directory, '.stylelintignore'),
        );
        fs.copyFileSync(
          getCliFilePath(`.stylelintrc-${css}.js`),
          path.resolve(directory, '.stylelintrc.js'),
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
          path.resolve(directory, '.markdownlintignore'),
        );
        fs.copyFileSync(
          getCliFilePath('.markdownlint.json'),
          path.resolve(directory, '.markdownlint.json'),
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
          path.resolve(directory, '.commitlintrc.json'),
          path.resolve(directory, '.commitlintrc.yml'),
          path.resolve(directory, 'commitlint.config.js'),
        );
        fs.copyFileSync(
          getCliFilePath('.commitlintrc.js'),
          path.resolve(directory, '.commitlintrc.js'),
        );
      }
      // Set commitizen
      if (config.includes('commitizen')) {
        pkgObj.scripts = {
          ...pkgObj.scripts,
          commit: 'cz',
        };
        pkgObj.config = {
          ...pkgObj.config,
          commitizen: {
            path: './node_modules/cz-conventional-changelog',
          },
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
          path.resolve(directory, '.lintstagedrc.cjs'),
        );
        const lintStagedObject = {};
        if (config.includes('markdownlint')) {
          lintStagedObject['*.{md,markdown}'] = 'markdownlint --fix';
        }
        if (config.includes('eslint')) {
          lintStagedObject['*.{js,jsx,ts,tsx,vue,json,jsonc,json5}'] =
            pkgObj.dependencies['@vue/cli-service'] ||
            pkgObj.devDependencies['@vue/cli-service']
              ? 'vue-cli-service lint --fix'
              : 'eslint --fix';
        }
        if (config.includes('stylelint')) {
          lintStagedObject['*.{css,less,scss,vue}'] = 'stylelint --fix';
        }
        const lintStagedArray = Object.keys(lintStagedObject)
          .sort()
          .reduce((acc, cur) => {
            acc.push(`${indent}'${cur}': '${lintStagedObject[cur]}',\n`);
            return acc;
          }, []);
        fs.writeFileSync(
          path.resolve(directory, '.lintstagedrc.js'),
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
        Object.keys(pkgObj.devDependencies)
          .sort()
          .map((cur) => [cur, pkgObj.devDependencies[cur]]),
      );
      pkgObj.scripts = {
        ...pkgObj.scripts,
        lint: [...new Set(lintItems)].sort().join(' && '),
      };
      pkgObj.scripts = Object.fromEntries(
        Object.keys(pkgObj.scripts)
          .sort()
          .map((cur) => [cur, pkgObj.scripts[cur]]),
      );
      fs.writeFileSync(
        path.resolve(directory, 'package.json'),
        `${JSON.stringify(pkgObj, null, indent)}\n`,
      );
      // Install dependencies
      console.log(chalk.cyan('\nInstalling dependencies...\n'));
      shell.cd(path.resolve(directory));
      shell.exec(`${pkgManager} install`);
      shell.chmod('+x', path.resolve(directory, '.git', 'hooks', '*'));
      if (shell.cd('-').code === 0) {
        console.log(
          chalk.cyan(
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
