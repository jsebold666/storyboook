import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

export default class GenericInput extends Component {
  constructor(props) {
    super();

    this.genericInput = null;

    this.handleRef = this.handleRef.bind(this);
    this.onBlurInputHandler = this.onBlurInputHandler.bind(this);
    this.onFocusInputHandler = this.onFocusInputHandler.bind(this);
    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    this.onKeyPressInputHandler = this.onKeyPressInputHandler.bind(this);
  }

  handleRef(input) {
    const { inputRef } = this.props;

    if (inputRef) {
      inputRef(input);
    }
  }

  onChangeInputHandler(ev) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(ev);
    }
  }

  onFocusInputHandler(ev) {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(ev);
    }
  }

  onBlurInputHandler(ev) {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(ev);
    }
  }

  onKeyPressInputHandler(ev) {
    const { onKeyPress, onEnter } = this.props;

    if (onKeyPress) {
      onKeyPress(ev);
    }

    if (ev.key === 'Enter' && onEnter) {
      onEnter(ev);
    }
  }

  render() {
    const { name, type, className, placeholder, disabled, mask } = this.props;

    return (
      <InputMask
        inputRef={this.handleRef}
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={this.onChangeInputHandler}
        onKeyPress={this.onKeyPressInputHandler}
        onBlur={this.onBlurInputHandler}
        onFocus={this.onFocusInputHandler}
        disabled={disabled}
        mask={mask}
        value={this.props.value}
      />
    );
  }
}

GenericInput.defaultProps = {
  name: 'genericInput',
  type: 'text',
  placeholder: '',
  disabled: false,
  className: ''
};

GenericInput.propTypes = {
  /* input props */
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  mask: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),

  /* input events */
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onFocus: PropTypes.func,
  onEnter: PropTypes.func
};
