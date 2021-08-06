import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Wrapper, Box, Input, Label, IconWrapper } from './CheckboxStyles';
import CheckedIcon from '../../../static/images/check-icon.svg';

class Checkbox extends Component {
  constructor(props) {
    super();

    this.state = {
      id: 'checkboxId'
    };

    this.onChangeCheckboxHandler = this.onChangeCheckboxHandler.bind(this);
  }

  componentWillMount() {
    const id = uniqueId('checkbox-');
    this.setState({ id });
  }

  onChangeCheckboxHandler(ev) {
    const { onChange } = this.props;
    if (onChange) onChange(ev);
  }

  render() {
    const { id } = this.state;
    const { label, name, checked, value } = this.props;

    return (
      <Wrapper>
        <label>
          <Input
            id={id}
            name={name}
            checked={checked}
            value={value}
            onChange={this.onChangeCheckboxHandler}
          />
          <span>
            <Box checked={checked}>
              {checked && (
                <IconWrapper>
                  <CheckedIcon alt="checked" />
                </IconWrapper>
              )}
            </Box>
          </span>
        </label>

        <Label htmlFor={id}>{label}</Label>
      </Wrapper>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  name: 'checkbox'
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Checkbox;
