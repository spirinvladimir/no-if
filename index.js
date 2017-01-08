var
  esprima = require('esprima');

module.exports = function (code) {
  var
    i,
    token,
    tokens = esprima.tokenize(code),
    length = tokens.length;

  while (i < length) {
    token = tokens[i];
    i = node.type === 'Keyword' && node.value === 'if'
      ? length
      : i + 1;
  }

  return i === length;
};
