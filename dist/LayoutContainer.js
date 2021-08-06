import React from 'react';
import cx from 'classnames';

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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var LayoutContainer = function LayoutContainer(_ref) {
  var className = _ref.className,
      fullWidth = _ref.fullWidth,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['className', 'fullWidth', 'children']);

  var baseClass = 'gds-layout__container';
  var rootClass = cx(baseClass, className, defineProperty({}, baseClass + '--full-width', fullWidth));

  return React.createElement(
    'div',
    _extends({ className: rootClass }, props),
    children
  );
};

LayoutContainer.displayName = 'LayoutContainer';

LayoutContainer.defaultProps = {
  fullWidth: false
};

export default LayoutContainer;
//# sourceMappingURL=LayoutContainer.js.map
