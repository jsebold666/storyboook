import React, { Component } from 'react';
import { TagWrapper, Text, IconWrapper } from './TagButtonStyles';
import CloseIcon from '../Icons/CloseIcon';

class TagButton extends Component {
  constructor() {
    super();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
  }

  onClickHandler(event) {
    if (this.props.onClick && !this.props.disabled) this.props.onClick(event);
  }

  onClearHandler(event) {
    if (!this.props.disabled) {
      event.stopPropagation();
      if (this.props.onClear) this.props.onClear(event);
    }
  }

  render() {
    const { onClear, onClick, disabled, active, ...otherProps } = this.props;
    return (
      <TagWrapper disabled={disabled} active={active} {...otherProps} onClick={this.onClickHandler}>
        <Text>{this.props.text}</Text>

        {active &&
          !disabled && (
            <IconWrapper onClick={this.onClearHandler}>
              <CloseIcon />
            </IconWrapper>
          )}
      </TagWrapper>
    );
  }
}

export default TagButton;
