import React, { Component } from 'react';
import clipboard from 'clipboard-polyfill';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Clipboard = function (_Component) {
  inherits(Clipboard, _Component);

  function Clipboard(props) {
    classCallCheck(this, Clipboard);

    var _this = possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, props));

    _this.state = {
      copiedText: false
    };
    return _this;
  }

  createClass(Clipboard, [{
    key: 'copy',
    value: function copy() {
      clipboard.writeText(this.props.getText()).then(function () {
        this.setState({
          copiedText: true
        });
      }.bind(this)).catch(function () {
        this.setState({
          copiedText: false
        });
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        _extends({}, this.props, { onClick: this.copy.bind(this) }),
        this.props.children
      );
    }
  }]);
  return Clipboard;
}(Component);

export default Clipboard;
//# sourceMappingURL=Clipboard.js.map
