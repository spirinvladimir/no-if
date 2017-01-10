var
  esprima = require('esprima');

module.exports = function (code) {
  var
    i = 0,
    token,
    tokens = esprima.tokenize(code),
    length = tokens.length;

  while (i < length) {
    token = tokens[i];
    i = token.type === 'Keyword' && token.value === 'if'
      ? Infinity
      : i + 1;
  }

  return i <= length;
};
