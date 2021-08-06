var deprecateLog = function () {
  var hash = {};
  return function (message) {
    if (typeof message !== 'string') {
      throw new Error('Must provide a string as a message');
    }

    if (!hash[message]) {
      console.log('%cGumdrops %cWarning:', 'color: #00a7cf', 'color: #e5a516', message); // eslint-disable-line no-console
      hash[message] = true;
    }
  };
}();

var deprecateFunction = function deprecateFunction(fn, message) {
  if (typeof fn !== 'function') return;

  return function () {
    fn.apply(undefined, arguments);
    deprecateLog(message);
  };
};

export { deprecateLog, deprecateFunction };
//# sourceMappingURL=deprecate.js.map
