import React, { Component } from 'react';
import styled from 'styled-components';

var shared = {};

/* Primary Colors */
shared['periwinkle'] = '#9966ff';
shared['tealish'] = '#33cccc';
shared['degrade-start'] = '#ab64f5';
shared['degrade-end'] = '#8d85ee';
shared['pale-grey'] = '#f1f5f7';
shared['white'] = '#fff';
/* Secondary Colors */
shared['slate'] = '#4a5365';
shared['bluish-grey'] = '#859099';
shared['bluey-grey'] = '#acbec7';
shared['cloudy-blue'] = '#cfdae1';
shared['light-greyish'] = '#e0e7ec';
/* Terciary Colors */
shared['greenish-teal'] = '#33cc99';
shared['pale-orange'] = '#ff9966';
shared['periwinkle-blue'] = '#9999ff';
shared['bright-light-blue'] = '#33ccff';
shared['sun-yellow'] = '#ffcc33';
shared['salmon'] = '#ff6666';
shared['orchid'] = '#cc66cc';
shared['windows-blue'] = '#3399cc';
/* Default Colors */
shared['primary-color'] = shared['periwinkle'];
shared['secondary-color'] = shared['tealish'];
shared['grey'] = shared['bluish-grey'];
shared['dark-grey'] = shared['slate'];
shared['light-grey'] = shared['pale-grey'];
shared['success'] = shared['greenish-teal'];
shared['alert'] = shared['salmon'];
shared['warning'] = shared['sun-yellow'];
shared['background'] = shared['pale-grey'];
shared['medium-font-size'] = '14px';
shared['medium-line-height'] = '1.29';
shared['small-font-size'] = '12px';
shared['small-font-height'] = '1.5';
/* spaces */
shared['mobile-break-point'] = '1024px';

shared['sizes-mobile'] = '(sm: 1024) !default';
shared['sizes-desktop'] = '(md: 1280, lg: 1600px) !default';

//** Number of max columns in the grid
shared['grid-max-columns'] = '12 !default';
shared['grid-gutter-width'] = '32px !default'; // left + right

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

var Input = styled.input.withConfig({
  displayName: 'BigInput__Input',
  componentId: 'xo6509-0'
})(['font-family:Rubik,sans-serif;border:none;outline:none;height:90px;width:99%;margin-left:0px;margin-right:0px;font-size:36px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:0.69;letter-spacing:normal;text-align:center;color:', ';background-color:', ';input:focus{color:', ';}'], shared['bluey-grey'], function (props) {
  return props.isDisabled ? '#f1f5f7' : 'white';
}, shared['slate']);

var BigInput = function (_Component) {
  inherits(BigInput, _Component);

  function BigInput() {
    classCallCheck(this, BigInput);
    return possibleConstructorReturn(this, (BigInput.__proto__ || Object.getPrototypeOf(BigInput)).apply(this, arguments));
  }

  createClass(BigInput, [{
    key: 'render',
    value: function render() {
      return React.createElement(Input, this.props);
    }
  }]);
  return BigInput;
}(Component);

export default BigInput;
//# sourceMappingURL=BigInput.js.map
