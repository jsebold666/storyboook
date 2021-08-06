var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given an array, return an object with each element in the array set as the keys and values
 * @param   {Array}    arr
 * @returns {Object}
 */
var arrToObjOptions = function arrToObjOptions(arr) {
  return arr.reduce(function (acc, option) {
    return _extends({}, acc, defineProperty({}, option, option));
  }, {});
};

export default arrToObjOptions;
//# sourceMappingURL=arrToObjOptions.js.map
