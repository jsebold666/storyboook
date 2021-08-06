import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper/InputWrapper';
import GenericInput from '../GenericInput/GenericInput';
import ShowOffIcon from '../../../static/images/showOff.svg';
import ShowOnIcon from '../../../static/images/showOn.svg';
import { FormContext, uid } from '../Form/Form';

class PasswordInput extends Component {
  static contextType = FormContext;

  constructor(props) {
    super();

    this.passwordInput = null;

    this.uid = uid();

    this.state = {
      type: props.type
    };

    this.toggleIcon = this.toggleIcon.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }

  componentDidMount() {
    this.context.register(this);
  }

  toggleIcon() {
    if (this.props.disabled) return;

    this.setState(prevState => ({
      type: prevState.type === 'password' ? 'text' : 'password'
    }));
  }

  renderIcon() {
    const Icon = this.state.type === 'text' ? ShowOnIcon : ShowOffIcon;
    return <Icon onClick={this.toggleIcon} alt="Senha" />;
  }

  onBlurHandler(ev) {
    this.context.runValidations(this.uid, ev.target.value);
    this.props.onBlur && this.props.onBlur(ev);
  }

  render() {
    const { label, disabled } = this.props;
    const hasError = !!this.state.validationError;

    return (
      <InputWrapper hasError={hasError} disabled={disabled}>
        <label>{label}</label>
        {this.state.validationError && <label>{this.state.validationError}</label>}

        <Fragment>
          <GenericInput {...this.props} onBlur={this.onBlurHandler} type={this.state.type} />
          {this.renderIcon()}
        </Fragment>
      </InputWrapper>
    );
  }
}

PasswordInput.defaultProps = {
  name: 'inputPassword',
  type: 'password',
  label: 'Senha',
  placeholder: null,
  disabled: false,
  hasError: false,
  errorMessage: null
};

PasswordInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  searchIcon: PropTypes.string,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onEnter: PropTypes.func
};

export default PasswordInput;
