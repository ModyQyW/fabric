#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');
const pkg = require('./package.json');

const program = new Command();

const getCliFilePath = (filename) => {
  if (fs.existsSync(path.join(__dirname, 'config', filename))) {
    return path.join(__dirname, 'config', filename);
  }
  return path.join(__dirname, filename);
};

const cwd = process.cwd();

console.log(chalk.cyan(`\nmodyqyw-fabric is running in ${cwd} now.\n`));

program
  .version(pkg.version, '-v, --version')
  .command('config')
  .description('Config different packages for formatting and linting')
  .action((source, destination) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Select framework',
          default: 'native',
          choices: [
            {
              name: 'Native',
              value: 'native',
            },
            {
              name: 'Vue 2 / Nuxt 2 / UniApp',
              value: 'vue2',
            },
            {
              name: 'Vue 3 / UniApp',
              value: 'vue3',
            },
            {
              name:
                'React 17 / Umi 3 / Next 10 / ReactNative 0.64 / Taro 3 / Rax 1 / Remax 2',
              value: 'react',
            },
          ],
        },
        {
          type: 'list',
          name: 'css',
          message: 'Select css pre-processor',
          default: 'css',
          choices: [
            {
              name: 'CSS',
              value: 'css',
            },
            {
              name: 'LESS',
              value: 'less',
            },
            {
              name: 'SASS',
              value: 'sass',
            },
            {
              name: 'SCSS',
              value: 'scss',
            },
          ],
        },
        {
          type: 'confirm',
          name: 'typescript',
          message: 'TypeScript?',
          default: 'y',
        },
        {
          type: 'checkbox',
          name: 'config',
          message: 'Select configs',
          default: [
            'git',
            'editorconfig',
            'prettier-eslint',
            'stylelint',
            'markdownlint',
            'lint-md',
            'ls-lint',
            'commitlint',
            'commitizen',
            'lint-staged',
            'husky',
          ],
          choices: [
            {
              name: 'Git',
              value: 'git',
            },
            {
              name: 'EditorConfig',
              value: 'editorconfig',
            },
            {
              name: 'Prettier & ESLint',
              value: 'prettier-eslint',
            },
            {
              name: 'Stylelint',
              value: 'stylelint',
            },
            {
              name: 'Markdownlint',
              value: 'markdownlint',
            },
            {
              name: 'LintMD',
              value: 'lint-md',
            },
            {
              name: 'LsLint',
              value: 'ls-lint',
            },
            {
              name: 'Commitlint',
              value: 'commitlint',
            },
            {
              name: 'Commitizen',
              value: 'commitizen',
            },
            {
              name: 'LintStaged',
              value: 'lint-staged',
            },
            {
              name: 'Husky',
              value: 'husky',
            },
          ],
        },
      ])
      .then(({ framework, css, typescript, config }) => {
        if (!fs.existsSync('package.json')) {
          shell.exec('npm init -y');
        }
        const packageJson = fs.readFileSync('package.json', {
          encoding: 'utf8',
        });
        // const indent = /^[ ]+|\t+/m.exec(packageJson)
        //   ? /^[ ]+|\t+/m.exec(packageJson)[0]
        //   : '  ';
        const indent = '  ';
        const packageObject = JSON.parse(packageJson);
        // @modyqyw/fabric
        packageObject.devDependencies = {
          ...packageObject.devDependencies,
          '@modyqyw/fabric': `~${pkg.version}`,
        };
        // git
        if (config.includes('git')) {
          if (!shell.which('git')) {
            shell.echo(
              'Git is required in your system. Please install Git first.',
            );
          } else {
            shell.exec('git config --global core.autocrlf false');
            shell.exec('git config --global init.defaultBranch main');
            if (!fs.existsSync('.git')) {
              shell.exec('git init');
            }
            fs.copyFileSync(
              getCliFilePath('.gitattributes'),
              path.resolve('.gitattributes'),
            );
            fs.copyFileSync(
              getCliFilePath('.gitignore'),
              path.resolve('.gitignore'),
            );
          }
        }
        // editorconfig
        if (config.includes('editorconfig')) {
          fs.copyFileSync(
            getCliFilePath('.editorconfig'),
            path.resolve('.editorconfig'),
          );
        }
        // prettier and eslint
        if (config.includes('prettier-eslint')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            '@babel/core': pkg.dependencies['@babel/core'],
            '@babel/eslint-parser': pkg.dependencies['@babel/eslint-parser'],
            eslint: pkg.devDependencies.eslint,
            prettier: pkg.devDependencies.prettier,
          };
          if (typescript) {
            packageObject.devDependencies = {
              ...packageObject.devDependencies,
              '@typescript-eslint/eslint-plugin':
                pkg.dependencies['@typescript-eslint/eslint-plugin'],
              '@typescript-eslint/parser':
                pkg.dependencies['@typescript-eslint/parser'],
              typescript: pkg.dependencies.typescript,
            };
          }
          delete packageObject.prettier;
          delete packageObject.eslintConfig;
          shell.rm(
            '-rf',
            '.prettierrc',
            '.prettierrc.json',
            '.prettierrc.yml',
            '.prettierrc.yaml',
            '.prettierrc.json5',
            '.prettierrc.cjs',
            'prettier.config.js',
            'prettier.config.cjs',
            '.prettierrc.toml',
            '.eslintrc.cjs',
            '.eslintrc.yaml',
            '.eslintrc.yml',
            '.eslintrc.json',
          );
          fs.copyFileSync(
            getCliFilePath('.prettierrc.js'),
            path.resolve('.prettierrc.js'),
          );
          let extend = '';
          switch (framework) {
            case 'vue2':
              extend = typescript ? 'vue2-typescript' : 'vue2';
              break;
            case 'vue3':
              extend = typescript ? 'vue3-typescript' : 'vue3';
              break;
            default:
              extend = framework;
              break;
          }
          fs.copyFileSync(
            getCliFilePath(`.eslintrc-${extend}.js`),
            path.resolve('.eslintrc.js'),
          );
          fs.copyFileSync(
            getCliFilePath('.prettierignore'),
            path.resolve('.prettierignore'),
          );
          fs.copyFileSync(
            getCliFilePath('.eslintignore'),
            path.resolve('.eslintignore'),
          );
        }
        // stylelint
        if (config.includes('stylelint')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            stylelint: pkg.devDependencies.stylelint,
          };
          delete packageObject.stylelint;
          shell.rm(
            '-rf',
            '.stylelintrc',
            'stylelint.config.js',
            'stylelint.config.cjs',
            '.stylelintrc.json',
            '.stylelintrc.yaml',
            '.stylelintrc.yml',
          );
          fs.copyFileSync(
            getCliFilePath(`.stylelintrc-${css}.js`),
            path.resolve('.stylelintrc.js'),
          );
          fs.copyFileSync(
            getCliFilePath('.stylelintignore'),
            path.resolve('.stylelintignore'),
          );
        }
        // markdownlint
        if (config.includes('markdownlint')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            'markdownlint-cli': pkg.devDependencies['markdownlint-cli'],
          };
          shell.rm(
            '-rf',
            '.markdownlint.yaml',
            '.markdownlint.yml',
            '.markdownlintrc',
          );
          fs.copyFileSync(
            getCliFilePath('.markdownlint.json'),
            path.resolve('.markdownlint.json'),
          );
          fs.copyFileSync(
            getCliFilePath('.markdownlintignore'),
            path.resolve('.markdownlintignore'),
          );
        }
        // lint-md
        if (config.includes('lint-md')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            'lint-md-cli': pkg.devDependencies['lint-md-cli'],
          };
          fs.copyFileSync(
            getCliFilePath('.lintmdrc'),
            path.resolve('.lintmdrc'),
          );
        }
        // ls-lint
        if (config.includes('ls-lint')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            '@ls-lint/ls-lint': pkg.devDependencies['@ls-lint/ls-lint'],
          };
          fs.copyFileSync(
            getCliFilePath(`.ls-lint.yml`),
            path.resolve('.ls-lint.yml'),
          );
        }
        // commitlint
        if (config.includes('commitlint')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            '@commitlint/cli': pkg.devDependencies['@commitlint/cli'],
          };
          delete packageObject.commitlint;
          shell.rm(
            '-rf',
            '.commitlintrc.json',
            '.commitlintrc.yml',
            'commitlint.config.js',
          );
          fs.copyFileSync(
            getCliFilePath('.commitlintrc.js'),
            path.resolve('.commitlintrc.js'),
          );
        }
        // commitizen
        if (config.includes('commitizen')) {
          packageObject.scripts = {
            ...packageObject.scripts,
            commit: 'cz',
          };
          packageObject.config = {
            ...packageObject.config,
            commitizen: {
              path: './node_modules/cz-conventional-changelog',
            },
          };
        }
        // lint-staged
        if (config.includes('lint-staged')) {
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            'lint-staged': pkg.devDependencies['lint-staged'],
          };
          delete packageObject['lint-stated'];
          shell.rm(
            '-rf',
            '.lintstagedrc',
            '.lintstagedrc.json',
            '.lintstagedrc.yaml',
            '.lintstagedrc.yml',
            'lint-staged.config.js',
            '.lintstagedrc.cjs',
          );
          let lintStagedObject = {};
          if (config.includes('markdownlint')) {
            lintStagedObject['*.{md,markdown}'] = config.includes('lint-md')
              ? 'markdownlint --fix && lint-md --fix'
              : 'markdownlint --fix';
          }
          if (config.includes('prettier-eslint')) {
            lintStagedObject['*.json'] = 'prettier --write';
            lintStagedObject['*.{js,jsx,ts,tsx,vue}'] = framework.includes(
              'vue',
            )
              ? 'vue-cli-service lint --fix'
              : 'eslint --fix';
          }
          if (config.includes('stylelint')) {
            lintStagedObject['*.{css,less,sass,scss,vue}'] = 'stylelint --fix';
          }
          lintStagedObject = Object.keys(lintStagedObject)
            .sort()
            .reduce((acc, cur) => {
              acc[cur] = lintStagedObject[cur];
              return acc;
            }, {});
          fs.writeFileSync(
            path.resolve('.lintstagedrc.js'),
            `module.exports = ${JSON.stringify(
              lintStagedObject,
              null,
              indent,
            )};\n`,
          );
        }
        // husky
        if (config.includes('husky')) {
          packageObject.scripts = {
            ...packageObject.scripts,
            prepare: 'is-ci || husky install',
          };
          delete packageObject.husky;
          packageObject.devDependencies = {
            ...packageObject.devDependencies,
            husky: pkg.devDependencies.husky,
            'is-ci': pkg.devDependencies['is-ci'],
          };
          if (!fs.existsSync(path.resolve('.husky'))) {
            shell.mkdir('.husky');
          }
          if (config.includes('commitlint')) {
            fs.writeFileSync(
              path.resolve('.husky', 'commit-msg'),
              `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit $1\n`,
            );
          }
          if (config.includes('ls-lint') && config.includes('lint-staged')) {
            fs.writeFileSync(
              path.resolve('.husky', 'pre-commit'),
              `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install ls-lint . && npx --no-install lint-staged\n`,
            );
          } else if (config.includes('ls-lint')) {
            fs.writeFileSync(
              path.resolve('.husky', 'pre-commit'),
              `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install ls-lint .\n`,
            );
          } else if (config.includes('lint-staged')) {
            fs.writeFileSync(
              path.resolve('.husky', 'pre-commit'),
              `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install lint-staged\n`,
            );
          }
          shell.chmod('+x', path.resolve('.husky', '*'));
        }
        // write package.json
        packageObject.devDependencies = Object.keys(
          packageObject.devDependencies,
        )
          .sort()
          .reduce((acc, cur) => {
            acc[cur] = packageObject.devDependencies[cur];
            return acc;
          }, {});
        fs.writeFileSync(
          'package.json',
          `${JSON.stringify(packageObject, null, indent)}`,
        );
        // install dependencies
        console.log(chalk.cyan('\nInstalling dependencies...\n'));
        let command = '';
        if (fs.existsSync(path.resolve('yarn.lock'))) {
          if (!shell.which('yarn')) {
            shell.echo(
              "\nError: This is a yarn project but you haven't install yarn. Installing yarn for you now...\n",
            );
            shell.exec('npm i -g yarn');
          }
          command = 'yarn install';
        } else if (fs.existsSync(path.resolve('package-lock.lock'))) {
          command = 'npm install';
        } else if (shell.which('yarn')) {
          command = 'yarn install';
        } else {
          command = 'npm install';
        }
        shell.chmod('+x', path.resolve('.git', 'hooks', '*'));
        // finished 🎉
        if (shell.exec(command).code === 0) {
          console.log(
            chalk.cyan(
              '\nDone! 🎉 Please confirm there are no bugs. Or, you can add an issue here: https://github.com/ModyQyW/fabric/issues/new. Thank you! :D\n',
            ),
          );
        }
      });
  });

program.parse(process.argv);
