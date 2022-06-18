#! /usr/bin/env node

const inquirer = require('inquirer');

const createNextApp = require('./bin/create-next-app');
const setup = require('./bin/setup');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'todo',
      message: 'What do you want to do?',
      choices: [
        { name: 'Create Next.js TS project', value: 1 },
        { name: 'Add additional setup to current project', value: 2 },
      ],
    },
  ])
  .then(({ todo }) => {
    switch (todo) {
      case 1:
        return createNextApp();
      case 2:
        return setup();
    }
  });
