import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { default as CI } from 'react-currency-input';
import InputWrapper from './InputWrapper/InputWrapper';
import CircularProgress from '@material-ui/core/CircularProgress';

import colors from '../../styles/colors';

class CurrencyInput extends Component {
  constructor(props) {
    super();
    this.currencyInput = null;

    this.state = {
      value: props.value,
      focused: false,
      touched: false
    };

    this.onBlurInputHandler = this.onBlurInputHandler.bind(this);
    this.onClickIconHandler = this.onClickIconHandler.bind(this);
    this.onFocusInputHandler = this.onFocusInputHandler.bind(this);
    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
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

    if (onBlur) onBlur(ev);
  }

  onClickIconHandler() {
    const { onClear } = this.props;

    this.setState({ value: '' }, () => {
      this.currencyInput.theInput.focus();
    });

    if (onClear) onClear();
  }

  onChangeInputHandler(ev, maskedValue, rawValue) {
    const { onChange } = this.props;

    this.setState({
      value: ev.target.value,
      focused: true,
      touched: true
    });

    if (onChange) {
      onChange(ev, maskedValue, rawValue);
    }
  }

  renderIcon() {
    const { isLoading, enableClear, hasError, isValid } = this.props;
    const { focused, touched } = this.state;

    if (isLoading) return <CircularProgress />;

    if (enableClear && focused && touched)
      return <img alt="" src="/images/erase.svg" onClick={this.onClickIconHandler} />;

    if (hasError) return <img src="/images/error_input.svg" alt="" />;

    if (isValid) return <img src="/images/success_input.svg" alt="" />;
  }

  render() {
    const {
      label,
      message,
      errorMessage,
      hasError,
      disabled,
      isValid,
      onClear,
      enableClear,
      searchIcon,
      isLoading,
      ...other
    } = this.props;

    return (
      <InputWrapper hasError={hasError} disabled={disabled}>
        <label>{label}</label>
        {errorMessage || message ? (
          <label style={{ color: colors['bluish-grey'] }}>{errorMessage || message}</label>
        ) : null}

        <Fragment>
          <CI
            {...other}
            ref={input => {
              this.currencyInput = input;
            }}
            onChangeEvent={this.onChangeInputHandler}
            onFocus={this.onFocusInputHandler}
            onBlur={this.onBlurInputHandler}
            value={this.state.value}
            maxLength={20}
          />
          {this.renderIcon()}
        </Fragment>
      </InputWrapper>
    );
  }
}

CurrencyInput.defaultProps = {
  name: 'currencyInput',
  type: 'text',
  disabled: false,
  isLoading: false,
  searchIcon: '/images/search.svg',
  message: null,
  hasError: false,
  errorMessage: null,
  enableClear: true,

  precision: 2,
  decimalSeparator: ',',
  thousandSeparator: '.',
  allowNegative: false,
  allowEmpty: false,
  selectAllOnFocus: false,
  prefix: 'R$ ',
  suffix: '',
  autoFocus: false
};

CurrencyInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  searchIcon: PropTypes.string,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onClickIcon: PropTypes.func,
  onEnter: PropTypes.func,

  precision: PropTypes.number,
  decimalSeparator: PropTypes.string,
  thousandSeparator: PropTypes.string,
  allowNegative: PropTypes.bool,
  allowEmpty: PropTypes.bool,
  selectAllOnFocus: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  autoFocus: PropTypes.bool
};

export default CurrencyInput;
