import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper/InputWrapper';
import GenericInput from '../GenericInput/GenericInput';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '../../../static/images/search.svg';

class SearchInput extends Component {
  constructor() {
    super();

    this.searchInput = null;

    this.onClickIconHandler = this.onClickIconHandler.bind(this);
  }

  onClickIconHandler() {
    const { onClickIcon, disabled } = this.props;

    if (onClickIcon && !disabled) {
      onClickIcon({
        target: {
          name: this.searchInput.name,
          value: this.searchInput.value
        }
      });
    }
  }

  renderIcon() {
    const { isLoading } = this.props;

    return isLoading ? <CircularProgress /> : <SearchIcon onClick={this.onClickIconHandler} />;
  }

  render() {
    const { label, message, errorMessage, hasError, disabled } = this.props;

    return (
      <InputWrapper hasError={hasError} disabled={disabled}>
        <label>{label}</label>
        {errorMessage || message ? <label>{errorMessage || message}</label> : null}

        <Fragment>
          <GenericInput
            inputRef={input => {
              this.searchInput = input;
            }}
            {...this.props}
          />
          {this.renderIcon()}
        </Fragment>
      </InputWrapper>
    );
  }
}

SearchInput.defaultProps = {
  name: 'inputSearch',
  type: 'text',
  placeholder: null,
  disabled: false,
  isLoading: false,
  searchIcon: <SearchIcon />,
  message: null,
  hasError: false,
  errorMessage: null
};

SearchInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  searchIcon: PropTypes.string,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onClickIcon: PropTypes.func,
  onEnter: PropTypes.func
};

export default SearchInput;
