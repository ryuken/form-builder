"use strict";

var getValue = function getValue(data) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var result = null;
  var keys = path.split(".");
  var key = keys[0];

  if (key === "*") {
    result = [];

    if (keys[1]) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
          result.push(getValue(i, keys[1]));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      result = data;
    }

    return result;
  } else {
    result = data[key];
  }

  keys.splice(0, 1);

  if (keys.length > 0) {
    result = getValue(result, keys.join("."));
  }

  return result;
};

module.exports = getValue; // const data = {
//     friends: [
//         { name: "aap" },
//         { name: "mies" }
//     ]
// }
// console.log(
//     getValue(data, "friends.*.name")
// )