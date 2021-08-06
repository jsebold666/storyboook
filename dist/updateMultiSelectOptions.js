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

var updateAllOptions = function updateAllOptions(options, selected) {
  return options.map(function (item) {
    return _extends({}, item, {
      selected: selected
    });
  });
};

var updateNestedOptions = function updateNestedOptions(options, item) {
  return options.map(function (option, i) {
    if (!option.options) {
      return _extends({}, option, {
        selected: i === item.index ? item.selected : option.selected
      });
    }

    return _extends({}, option, {
      selected: i === item.index ? item.selected : option.selected,
      options: i === item.index ? updateAllOptions(item.options, item.selected) : option.options
    });
  });
};

function updateOptions(options, item) {
  var hasSubOptions = item.options;

  if (hasSubOptions) {
    return updateNestedOptions(options, item);
  }

  return options.map(function (option, i) {
    return _extends({}, option, {
      selected: i === item.index ? item.selected : option.selected
    });
  });
}

export default updateOptions;
//# sourceMappingURL=updateMultiSelectOptions.js.map
