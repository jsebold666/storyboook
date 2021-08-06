import React, { Component } from 'react';
import styled from 'styled-components';
import shared from '../../consts/shared';
import { FormContext, uid } from '../Form/Form';

const Input = styled.input`
  min-width: 200px;
  width: 100%;
  height: 80px;
  border: 0;
  padding: 24px 16px 24px 24px;
  outline: none;
  background-color: ${shared['tealish']};
  color: ${shared['white']};

  &:hover:not(.btn-default):not(.btn-loading):not([disabled]) {
    background-color: #43e4e4;
  }
  &:active:not(.btn-default):not(.btn-loading):not([disabled]) {
    background-color: #2fbcbc;
  }

  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;

  &:disabled {
    background-color: ${shared['cloudy-blue']};
    &,
    & * {
      cursor: not-allowed;
    }
  }
`;

export default class Submit extends Component {
  render() {
    return <Input type="submit" value={this.props.value} />;
  }
}
