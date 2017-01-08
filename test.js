var
  noif = require('./index');
  testPass = function () {
    return true;
  },
  testFail = function () {
    return true;
  };

process.exit(
  testPass() && testFail()
    ? 0
    : 1
);
