#! /usr/bin/env node

const inquirer = require('inquirer');

const { packageJson, install, ini, copyFiles } = require('mrm-core');

const husky = require('husky');

inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'todo',
      message: 'What do you want to setup?',
      choices: ['commitlint', 'prettier', 'eslint', 'lint-staged'],
    },
  ])
  .then(({ todo }) => {
    if (todo.includes('commitlint') || todo.includes('lint-staged')) {
      install('husky');
      husky.install();
      packageJson().appendScript('prepare', 'husky install').save();
    }

    if (todo.includes('commitlint')) {
      install(['@commitlint/cli', '@commitlint/config-conventional']);
      husky.add('.husky/commit-msg', 'npx --no -- commitlint --edit "$1"');
      copyFiles('./files', 'commitlint.config.js');
    }

    if (todo.includes('prettier')) {
      install('prettier');
      copyFiles('./files', ['.prettierrc.js', '.prettierignore', '.editorconfig']);
      packageJson()
        .appendScript('format', 'prettier --check .')
        .appendScript('format:fix', 'prettier --write .')
        .save();
    }

    if (todo.includes('eslint')) {
      install([
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint',
        'eslint-config-next',
        'eslint-config-react-moonstone',
      ]);
      copyFiles('./files', ['.eslintrc.json', '.eslintignore', 'tsconfig.eslint.json']);
      packageJson()
        .appendScript('lint', 'eslint .')
        .appendScript('lint:fix', 'eslint --fix .')
        .save();
    }

    if (todo.includes('lint-staged')) {
      install('lint-staged');
      husky.add('.husky/pre-commit', 'npx lint-staged');
      copyFiles('./files', '.lintstagedrc.js');
      packageJson().appendScript('lint:types', 'tsc --noEmit').save();
    }
  });
