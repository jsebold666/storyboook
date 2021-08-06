import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper/InputWrapper';
import GenericInput from '../GenericInput/GenericInput';
import CircularProgress from '@material-ui/core/CircularProgress';

import Erase from '../../../static/images/erase.svg';
import ErrorInput from '../../../static/images/error_input.svg';
import SuccessInput from '../../../static/images/success_input.svg';
import { FormContext, uid } from '../Form/Form';

class TextInput extends Component {
  static contextType = FormContext;

  constructor(props) {
    super();

    this.uid = uid();

    this.textInput = null;

    this.state = {
      value: props.value,
      error: null,
      focused: false,
      touched: false,
      isValid: true
    };

    this.onBlurInputHandler = this.onBlurInputHandler.bind(this);
    this.onClickIconHandler = this.onClickIconHandler.bind(this);
    this.onFocusInputHandler = this.onFocusInputHandler.bind(this);
    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    this.onKeyPressInputHandler = this.onKeyPressInputHandler.bind(this);
  }

  componentDidMount() {
    this.context.register(this);
  }

  onKeyPressInputHandler(ev) {
    const { onKeyPress } = this.props;
    if (onKeyPress) onKeyPress(ev);
  }

  onFocusInputHandler(ev) {
    const { onFocus } = this.props;

    this.setState({ focused: true });

    if (onFocus) onFocus(ev);
  }

  onBlurInputHandler(ev) {
    const { onBlur } = this.props;

    // quando o ícone é clicado, onBlur é chamado antes do click do icone e por isso o setTimeout
    setTimeout(() => {
      this.setState({ focused: false });
    }, 150);

    this.context.runValidations(this.uid, ev.target.value);

    if (onBlur) onBlur(ev);
  }

  onChangeInputHandler(ev) {
    const { onChange } = this.props;

    this.setState({
      value: ev.target.value,
      focused: true,
      touched: true
    });

    if (onChange) onChange(ev);
  }

  onClickIconHandler() {
    const { onClear } = this.props;

    this.setState({ value: '' }, () => {
      this.textInput.focus();
    });

    if (onClear) onClear();
  }

  renderIcon() {
    const { isLoading, enableClear, isValid } = this.props;
    const { focused, touched } = this.state;
    const hasError = !!this.displayErrorMessage();

    if (isLoading) return <CircularProgress />;
    if (enableClear && focused && touched) return <Erase onClick={this.onClickIconHandler} />;
    if (hasError) return <ErrorInput />;
    if (isValid) return <SuccessInput />;
  }

  displayErrorMessage() {
    return this.state.validationError || this.props.errorMessage;
  }

  render() {
    const { label, message, disabled } = this.props;
    const hasError = !!this.displayErrorMessage();
    const topRightMessage = this.displayErrorMessage() || message;

    return (
      <InputWrapper hasError={hasError} disabled={disabled}>
        <label>{label}</label>
        <label>{topRightMessage}</label>
        <Fragment>
          <GenericInput
            {...this.props}
            inputRef={input => {
              this.textInput = input;
            }}
            onFocus={this.onFocusInputHandler}
            onBlur={this.onBlurInputHandler}
            onChange={this.onChangeInputHandler}
            value={this.state.value}
            onKeyPress={this.onKeyPressInputHandler}
          />

          {this.renderIcon()}
        </Fragment>
      </InputWrapper>
    );
  }
}

TextInput.defaultProps = {
  name: 'inputText',
  type: 'text',
  placeholder: null,
  disabled: false,
  value: '',
  isLoading: false,
  message: null,
  hasError: false,
  errorMessage: null,
  enableClear: false
};

TextInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  enableClear: PropTypes.bool
};

export default TextInput;
