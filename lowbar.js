let _ = {};

_.identity = function () {
  return arguments[0];
}

if (typeof module !== 'undefined') {
  module.exports = _;
}
