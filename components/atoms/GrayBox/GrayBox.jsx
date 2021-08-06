import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, HeaderWrapper, Label, Details, MessageWrapper, Message } from './GrayBoxStyles';

class GrayBox extends Component {
  render() {
    return (
      <Wrapper style={this.props.style} className={this.props.className}>
        <HeaderWrapper>
          <Label htmlFor={this.props.name}>{this.props.label}</Label>
          {this.props.details && <Details>{this.props.details}</Details>}
        </HeaderWrapper>
        {this.props.children}
        <MessageWrapper>
          <Message size={this.props.messageSize}>
            {this.props.prefix} {this.props.message}
          </Message>
        </MessageWrapper>
      </Wrapper>
    );
  }
}

GrayBox.defaultProps = {
  messageSize: 'medium'
};

GrayBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.string,
  messageSize: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default GrayBox;
