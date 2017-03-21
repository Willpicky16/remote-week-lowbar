let _ = {};

_.identity = function () {
  return arguments[0];
}

_.first = function (arr) {
  return arr[0];
}

if (typeof module !== 'undefined') {
  module.exports = _;
}
