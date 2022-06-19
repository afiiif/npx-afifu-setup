#! /usr/bin/env node

const inquirer = require('inquirer');

const { createNextApp, promptNextApp } = require('./bin/create-next-app');
const setup = require('./bin/setup');

const args = process.argv.slice(2);

if (args[0]) {
  createNextApp({ name: args[0] });
} else {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'todo',
        message: 'What do you want to do?',
        choices: [
          { name: 'Create Next.js TS project', value: 'create-new' },
          { name: 'Add additional setup to current project', value: 'setup-existing' },
        ],
      },
    ])
    .then(({ todo }) => {
      if (todo === 'create-new') {
        return promptNextApp();
      }
      return setup();
    });
}
