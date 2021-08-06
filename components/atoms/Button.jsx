import React from 'react';
import PropTypes from 'prop-types';
import ArrowForward from '@material-ui/icons/ArrowForward';
import LoadingIcon from './LoadingIcon';
import styled from 'styled-components';
import shared from '../consts/shared';

const Btn = styled.button`
  &:not(.btn-loading),
  &:not(.btn-loading) * {
    cursor: pointer;
  }

  &.btn {
    min-width: 200px;
    width: 100%;

    border: 0;

    outline: none;
    background-color: ${shared['tealish']};
    color: ${shared['white']};

    &.small {
      height: 48px;
      padding: 12px 24px 14px 24px;
      border-radius: 4px;
    }

    &.medium {
      height: 80px;
      padding: 24px 16px 24px 24px;
    }

    &.large {
      height: 100px;
      padding: 24px 16px 24px 24px;
    }

    &:hover:not(.btn-default):not(.btn-loading):not([disabled]) {
      background-color: #43e4e4;
    }
    &:active:not(.btn-default):not(.btn-loading):not([disabled]) {
      background-color: #2fbcbc;
    }
  }

  &.btn-default {
    color: ${shared['periwinkle']};
    background-color: ${shared['white']};
  }

  &:disabled {
    background-color: ${shared['cloudy-blue']};
    &,
    & * {
      cursor: not-allowed;
    }
  }

  & .btn-inner__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & label {
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      margin-right: 32px;
      flex: 1;
      text-align: left;
    }
  }

  .btn-bottom {
    position: absolute;
    bottom: 0;
  }
`;

class Button extends React.Component {
  constructor() {
    super();

    this.getIcon = this.getIcon.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(ev) {
    const { onClick, isLoading } = this.props;

    if (onClick && !isLoading) {
      onClick(ev);
    }
  }

  getIcon() {
    if (this.props.isLoading) {
      const { className } = this.props;
      const isWhiteBackground = className && className.includes('btn-default');
      const color = isWhiteBackground ? shared['periwinkle'] : shared['white'];
      return <LoadingIcon color={color} />;
    } else if (this.props.showIcon) {
      return <ArrowForward />;
    }
  }

  render() {
    const { className, disabled, isLoading, type, size } = this.props;
    const klass = `btn ${className || ''} ${isLoading ? 'btn-loading' : ''} ${size || 'medium'}`;
    return (
      <Btn type={type} className={klass} disabled={disabled} onClick={this.onClickHandler}>
        <div className="btn-inner__container">
          <label>{this.props.children}</label>
          {this.getIcon()}
        </div>
      </Btn>
    );
  }
}

Button.defaultProps = {
  isLoading: false,
  showIcon: true,
  disabled: false,
  type: 'button'
};

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  showIcon: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
