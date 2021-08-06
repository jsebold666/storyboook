import React, { Component } from 'react';
import styled from 'styled-components';
import shared from '../consts/shared';

const Input = styled.input`
  font-family: Rubik, sans-serif;
  border: none;
  outline: none;
  height: 90px;
  width: 99%;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.69;
  letter-spacing: normal;
  text-align: center;
  color: ${shared['bluey-grey']};
  background-color: ${props => (props.isDisabled ? '#f1f5f7' : 'white')};

  input:focus {
    color: ${shared['slate']};
  }
`;

export default class BigInput extends Component {
  render() {
    return <Input {...this.props} />;
  }
}
