let _ = {};

_.identity = function () {
  return arguments[0];
};

_.first = function (arr) {
  return arr[0];
};

_.last = function (arr) {
  return arr[arr.length - 1];
};

_.each = function (list, iteratee, context) {
  if (Array.isArray(list)) {
    length = list.length;
    for (let i = 0; i < length; i++) {
      iteratee(list[i], i, list);
    }
  } else {
    let keys = Object.keys(list);
    length = keys.length;
    for (i; i < length; i++) {
      iteratee(list[keys[i]], keys[i], list);
    }
  }
  return list;
};

_.indexOf = function (arr, num) {
  return arr.indexOf(num);
};

_.filter = function (list, func) {
  let res = [];

  for (let i = 0; i < list.length; i++) {
    func(list[i]) ? res.push(list[i]) : list[i];
  }
  return res;
};

_.reject = function (list, fun) {
  var res = [];

  for (var i = 0; i < list.length; i++) {
    fun(list[i]) ? list[i] : res.push(list[i]);
  }

  return res;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
