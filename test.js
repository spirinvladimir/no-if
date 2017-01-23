var
  noIf = require('./index'),
  testPass = function () {
    return true === noIf('var a = 2 * 3;')
  },
  testFail = function () {
    return false === noIf('if (window.a) a *= 2;');
  },
  exitCode;

exitCode = testPass() && testFail()
  ? 0
  : 1;

process.exit(exitCode);
