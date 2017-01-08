var
  noif = require('./index');
  testPass = function () {

  },
  testFail = function () {
    
  };

process.exit(
  testPass() && testFail()
    ? 0
    : 1
);
