#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');
const pkg = require('./package.json');

const program = new Command();

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

console.log(
  chalk.cyan(
    `\nmodyqyw-fabric v${pkg.version} is running in ${process.cwd()} now.\n`,
  ),
);

program
  .version(pkg.version, '-v, --version')
  .command('config [directory]')
  .description('Config different packages for formatting and linting.')
  .action(async (directory = '.') => {
    try {
      // read
      if (!fs.existsSync(path.resolve(directory, 'package.json'))) {
        shell.exec('npm init -y');
      }
      const pkgJson = fs.readFileSync(path.resolve(directory, 'package.json'), {
        encoding: 'utf8',
      });
      const indent = '  ';
      const pkgObj = JSON.parse(pkgJson);
      const lintScriptItems = [];
      // TODO: better default value
      // choose
      const { framework, typescript, css, config } = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Select framework',
          default: 'native',
          choices: [
            { name: 'Native', value: 'native' },
            { name: 'Vue 2', value: 'vue2' },
            { name: 'Vue 3', value: 'vue3' },
            { name: 'React 17', value: 'react' },
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
            'commitlint',
            'commitizen',
            'lint-staged',
            'husky',
          ],
          choices: [
            { name: 'Git', value: 'git' },
            { name: 'EditorConfig', value: 'editorconfig' },
            { name: 'Prettier & ESLint', value: 'prettier-eslint' },
            { name: 'Stylelint', value: 'stylelint' },
            { name: 'Markdownlint', value: 'markdownlint' },
            { name: 'LintMD', value: 'lint-md' },
            { name: 'LsLint', value: 'ls-lint' },
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
            { name: 'SCSS', value: 'scss' },
          ],
        },
      ]);
      // set @modyqyw/fabric
      pkgObj.devDependencies = {
        ...pkgObj.devDependencies,
        '@modyqyw/fabric': `~${pkg.version}`,
      };
      // set git
      if (config.includes('git')) {
        if (!shell.which('git')) {
          shell.echo(
            'Git is required in your system. Please install Git first.',
          );
        } else {
          shell.exec('git config --global core.autocrlf false');
          shell.exec('git config --global init.defaultBranch main');
          if (!fs.existsSync(path.resolve(directory, '.git'))) {
            shell.exec('git init');
          }
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
      // set editorconfig
      if (config.includes('editorconfig')) {
        fs.copyFileSync(
          getCliFilePath('.editorconfig'),
          path.resolve(directory, '.editorconfig'),
        );
      }
      // set prettier and eslint
      if (config.includes('prettier-eslint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@babel/core': pkg.dependencies['@babel/core'],
          '@babel/eslint-parser': pkg.dependencies['@babel/eslint-parser'],
          eslint: pkg.devDependencies.eslint,
          prettier: pkg.devDependencies.prettier,
        };
        if (typescript) {
          pkgObj.devDependencies = {
            ...pkgObj.devDependencies,
            '@typescript-eslint/eslint-plugin':
              pkg.dependencies['@typescript-eslint/eslint-plugin'],
            '@typescript-eslint/parser':
              pkg.dependencies['@typescript-eslint/parser'],
            typescript: pkg.dependencies.typescript,
          };
        }
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:json': 'prettier ./**/*.json --write --ignore-path=.gitignore',
          'lint:script': pkgObj.devDependencies['@vue/cli-service']
            ? 'vue-cli-service lint --fix'
            : 'eslint . --fix --ext=.js,.jsx,.ts,.tsx,.vue --ignore-path=.gitignore',
        };
        lintScriptItems.push(
          `${pkgManager} run lint:json`,
          `${pkgManager} run lint:script`,
        );
        delete pkgObj.prettier;
        delete pkgObj.eslintConfig;
        delete pkgObj.eslintIgnore;
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
          path.resolve(directory, '.eslintrc'),
          path.resolve(directory, '.eslintrc.cjs'),
          path.resolve(directory, '.eslintrc.yaml'),
          path.resolve(directory, '.eslintrc.yml'),
          path.resolve(directory, '.eslintrc.json'),
          path.resolve(directory, '.eslintignore'),
        );
        fs.copyFileSync(
          getCliFilePath('.prettierrc.js'),
          path.resolve(directory, '.prettierrc.js'),
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
          path.resolve(directory, '.eslintrc.js'),
        );
      }
      // set stylelint
      if (config.includes('stylelint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          stylelint: pkg.devDependencies.stylelint,
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:style':
            'stylelint ./**/*.{css,less,sass,scss,vue} --fix --allow-empty-input --ignore-path=.gitignore',
        };
        lintScriptItems.push(`${pkgManager} run lint:style`);
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
      // set markdownlint
      if (config.includes('markdownlint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          'markdownlint-cli': pkg.devDependencies['markdownlint-cli'],
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:markdown': 'markdownlint . --fix --ignore-path=.gitignore',
        };
        lintScriptItems.push(`${pkgManager} run lint:markdown`);
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
      // set lint-md
      if (config.includes('lint-md')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@lint-md/cli': pkg.devDependencies['@lint-md/cli'],
        };
        pkgObj.scripts = config.includes('markdownlint')
          ? {
              ...pkgObj.scripts,
              'lint:markdown':
                'markdownlint . --fix --ignore-path=.gitignore && lint-md . --fix',
            }
          : {
              ...pkgObj.scripts,
              'lint:markdown': 'lint-md . --fix',
            };
        lintScriptItems.push(`${pkgManager} run lint:markdown`);
        delete pkgObj.devDependencies['lint-md-cli'];
        fs.copyFileSync(
          getCliFilePath('.lintmdrc'),
          path.resolve(directory, '.lintmdrc'),
        );
      }
      // set ls-lint
      if (config.includes('ls-lint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@ls-lint/ls-lint': pkg.devDependencies['@ls-lint/ls-lint'],
        };
        pkgObj.scripts = {
          ...pkgObj.scripts,
          'lint:ls': 'ls-lint .',
        };
        lintScriptItems.push(`${pkgManager} run lint:ls`);
        fs.copyFileSync(
          getCliFilePath(`.ls-lint.yml`),
          path.resolve(directory, '.ls-lint.yml'),
        );
      }
      // set commitlint
      if (config.includes('commitlint')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          '@commitlint/cli': pkg.devDependencies['@commitlint/cli'],
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
      // set commitizen
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
      // set lint-staged
      if (config.includes('lint-staged')) {
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          'lint-staged': pkg.devDependencies['lint-staged'],
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
        if (config.includes('markdownlint') && config.includes('lint-md')) {
          lintStagedObject['*.{md,markdown}'] =
            'markdownlint --fix && lint-md --fix';
        } else if (config.includes('markdownlint')) {
          lintStagedObject['*.{md,markdown}'] = 'markdownlint --fix';
        } else if (config.includes('lint-md')) {
          lintStagedObject['*.{md,markdown}'] = 'lint-md --fix';
        }
        if (config.includes('prettier-eslint')) {
          lintStagedObject['*.json'] = 'prettier --write';
          lintStagedObject['*.{js,jsx,ts,tsx,vue}'] = pkgObj.devDependencies[
            '@vue/cli-service'
          ]
            ? 'vue-cli-service lint --fix'
            : 'eslint --fix';
        }
        if (config.includes('stylelint')) {
          lintStagedObject['*.{css,less,sass,scss,vue}'] = 'stylelint --fix';
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
      // set husky
      if (config.includes('husky')) {
        pkgObj.scripts = {
          ...pkgObj.scripts,
          prepare: 'is-ci || husky install',
        };
        delete pkgObj.husky;
        delete pkgObj.gitHooks;
        pkgObj.devDependencies = {
          ...pkgObj.devDependencies,
          husky: pkg.devDependencies.husky,
          'is-ci': pkg.devDependencies['is-ci'],
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
        if (config.includes('ls-lint') && config.includes('lint-staged')) {
          fs.writeFileSync(
            path.resolve(directory, '.husky', 'pre-commit'),
            `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install ls-lint . && npx --no-install lint-staged\n`,
          );
        } else if (config.includes('ls-lint')) {
          fs.writeFileSync(
            path.resolve(directory, '.husky', 'pre-commit'),
            `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install ls-lint .\n`,
          );
        } else if (config.includes('lint-staged')) {
          fs.writeFileSync(
            path.resolve(directory, '.husky', 'pre-commit'),
            `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install lint-staged\n`,
          );
        }
        shell.chmod('+x', path.resolve(directory, '.husky', '*'));
      }
      // write package.json
      pkgObj.devDependencies = Object.keys(pkgObj.devDependencies)
        .sort()
        .reduce((acc, cur) => {
          acc[cur] = pkgObj.devDependencies[cur];
          return acc;
        }, {});
      pkgObj.scripts = {
        ...pkgObj.scripts,
        lint: [...new Set(lintScriptItems)].sort().join(' && '),
      };
      fs.writeFileSync(
        path.resolve(directory, 'package.json'),
        `${JSON.stringify(pkgObj, null, indent)}\n`,
      );
      // install dependencies
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
