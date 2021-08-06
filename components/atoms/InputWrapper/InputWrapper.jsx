import React, { Component } from 'react';
import { isFragment } from 'react-is';
import { isEqual } from 'lodash';
import styled from 'styled-components';
import shared from '../../consts/shared';
import './InputWrapper.css';

const InputSection = styled.section`
  width: 100%;
  min-height: 88px;
  box-sizing: border-box;
  background-color: ${shared['white']};
  position: relative;
  border-left: 4px solid ${shared['white']};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.box-edit__wrapper {
    background-color: ${shared['pale-grey']};
    border: solid 1px ${shared['light-greyish']};
  }

  &:focus-within {
    border-left: 4px solid ${shared['tealish']};
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  & .box__wrapper {
    min-height: inherit;
    display: flex;
    flex-direction: column;

    & .label__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px 0px 24px;

      & label:first-child {
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: ${shared['bluish-grey']};
        z-index: 1;
      }

      & label:last-child:not(:first-child) {
        font-size: 10px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: right;
        color: ${shared['slate']};
        z-index: 1;
      }
    }

    & .input__container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 24px;
      padding-bottom: 13px;
      flex: 1;

      & input {
        border: none;
        outline: none;
        min-height: 88px;
        padding-top: 48px;
        padding-left: 24px;
        padding-right: 56px;
        padding-bottom: 16px;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: normal;
        color: ${shared['slate']};
        position: absolute;
        bottom: 0;
        left: 0;
        background: transparent;
        width: 100%;
        box-sizing: border-box;

        &::placeholder {
          font-size: 20px;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.2;
          letter-spacing: normal;
          font-weight: normal;
          color: ${shared['bluey-grey']};
        }

        &:disabled,
        &:disabled::placeholder {
          font-size: 20px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.2;
          letter-spacing: normal;
          color: ${shared['cloudy-blue']};
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          -webkit-transition: 'color 999999s ease-out, background-color 999999s ease-out';
          transition: 'color 999999s ease-out, background-color 999999s ease-out';
          -webkit-transition-delay: 999999s;
          transition-delay: 999999s;
        }
      }

      & input + div {
        width: 24px !important;
        height: 24px !important;
      }

      & input + img {
        width: 32px !important;
        height: 32px !important;
        z-index: 10;
        cursor: pointer;
      }
    }
  }

  &.box-edit__wrapper .box__wrapper {
    & .input__container {
      & input {
        &:disabled,
        &:disabled::placeholder {
          font-size: 20px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.2;
          letter-spacing: normal;
          color: ${shared['slate']};
        }
      }
    }
  }

  &.disabled .box__wrapper {
    & .label__container label:first-child,
    & label:last-child:not(:first-child) {
      color: ${shared['cloudy-blue']};
    }

    & .input__container input,
    & .input__container input + img {
      cursor: not-allowed;
    }
  }

  &.invalid .box__wrapper {
    & label:last-child:not(:first-child) {
      color: ${shared['salmon']};
    }
  }
`;

class InputWrapper extends Component {
  constructor() {
    super();

    this.state = {
      labelContainerElement: [],
      inputContainerElement: []
    };
  }

  componentDidMount() {
    if (!!this.props.children) this.renderElementsFromParent();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.children, this.props.children) && !!this.props.children) {
      this.renderElementsFromParent();
    }
  }

  renderElementsFromParent() {
    const labelContainerElement = [];
    const inputContainerElement = [];

    for (let child of this.props.children) {
      if (child && (child.type === 'label' || child.type === 'span'))
        labelContainerElement.push(child);
      if (isFragment(child) || (child && child.type === 'input')) inputContainerElement.push(child);
    }

    this.setState({
      labelContainerElement,
      inputContainerElement
    });
  }

  render() {
    const { labelContainerElement, inputContainerElement } = this.state;
    const { hasError, disabled, className } = this.props;

    return (
      <InputSection
        className={`box__container ${disabled ? 'disabled' : ''} ${
          hasError ? 'invalid' : ''
        } box-with-bottom-margin ${className || ''}`}>
        <div className="box__wrapper">
          <div className="label__container">{labelContainerElement}</div>

          <div className="input__container">{inputContainerElement}</div>
        </div>
      </InputSection>
    );
  }
}

export default InputWrapper;
