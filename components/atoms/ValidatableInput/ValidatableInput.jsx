import React, { Component } from 'react';
import styled from 'styled-components';
import shared from '../../consts/shared';

const Input = styled.input`
  color: ${shared['bluey-grey']};
  background-color: ${props => (props.isDisabled ? '#f1f5f7' : 'white')};

  input:focus {
    color: ${shared['slate']};
  }
`;

export default class ValidatableInput extends Component {
  render() {
    return <Input {...this.props} />;
  }
}
