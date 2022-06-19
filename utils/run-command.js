const { execSync } = require('child_process');

const defaultOnError = (err, command) => {
  console.log(`Failed to execute ${command}`);
  console.error(err);
  process.exit(1);
};

const runCommand = (command, onError = defaultOnError) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    if (typeof onError === 'function') {
      onError(err, command);
    }
  }
};

module.exports = runCommand;
