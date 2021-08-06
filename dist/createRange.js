var createRange = function createRange() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var end = arguments[1];
  return Array.from({ length: end - start }, function (v, k) {
    return k + start;
  });
};

export default createRange;
//# sourceMappingURL=createRange.js.map
