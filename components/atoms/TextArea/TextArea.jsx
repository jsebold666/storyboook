import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './TextAreaStyles';

class TextArea extends Component {
  render() {
    return (
      <Wrapper>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <textarea {...this.props} />
      </Wrapper>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

export default TextArea;
