import React from 'react';

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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/* eslint-disable react/no-unused-prop-types */


var Column = function Column(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['xs', 'sm', 'md', 'lg', 'xl', 'className', 'children']);

  var sizes = { xs: xs, sm: sm, md: md, lg: lg, xl: xl };

  var classList = Object.keys(sizes).reduce(function (list, breakpoint) {
    var size = sizes[breakpoint];
    return list.concat(size ? 'gds-layout__column--' + breakpoint + '-' + size : []);
  }, []).concat(className || []);

  return React.createElement(
    'div',
    _extends({ className: classList.join(' ') }, props),
    children
  );
};

Column.displayName = 'Column';

Column.defaultProps = {
  md: 12
};

export default Column;
//# sourceMappingURL=Column.js.map
