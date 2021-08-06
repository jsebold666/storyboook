import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WarningIcon from '../../../static/images/warning.svg';
import SuccessIcon from '../../../static/images/success.svg';
import ErrorIcon from '../../../static/images/error.svg';
import { AlertBoxContainer, Icon, Message } from './AlertBoxStyles';

class AlertBox extends Component {
  render() {
    const { message, showIcon, type, className } = this.props;

    return (
      <AlertBoxContainer type={type} className={className || ''}>
        {showIcon && <Icon>{this.renderIcon()}</Icon>}
        <Message>{message || this.props.children}</Message>
      </AlertBoxContainer>
    );
  }

  renderIcon() {
    const { type } = this.props;

    if (type == 'warning') {
      return <WarningIcon />;
    } else if (type == 'success') {
      return <SuccessIcon />;
    } else if (type == 'error') {
      return <ErrorIcon />;
    }

    return '';
  }
}

AlertBox.defaultProps = {
  showIcon: false,
  message: ''
};

AlertBox.propTypes = {
  type: PropTypes.oneOf(['warning', 'error', 'success']).isRequired,
  showIcon: PropTypes.bool,
  message: PropTypes.string
};

export default AlertBox;
