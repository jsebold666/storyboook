/**
 * Traverse two arrays, and checks if they are equal
 * @param   {Array}    arr1
 * @param   {Array}    arr2
 * @returns {Boolean}
 */
var arraysEqual = function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // eslint-disable-next-line
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

export default arraysEqual;
//# sourceMappingURL=arraysEqual.js.map
