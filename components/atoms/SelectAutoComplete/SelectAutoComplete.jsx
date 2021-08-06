import React, { Component } from 'react';
import Select from 'react-select/lib/AsyncCreatable';
import { SelectWrapper, Text } from './SelectAutoCompleteStyles';
import ErrorIcon from '../../../static/images/outline-error.svg';

export default class SelectAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      selectedOption: '',
      options: [],
      isSearched: ''
    };
    this.promiseTimeout = null;
    this.toogleIsFocused = this.toogleIsFocused.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setIsFocused = this.setIsFocused.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  toogleIsFocused() {
    this.setIsFocused(!this.state.isFocused);
  }

  setIsFocused(isFocused = false) {
    this.setState({ isFocused: isFocused });
  }

  handleChange(e) {
    this.setState({ selectedOption: this.chooseOption(e), isFocused: false });
    if (this.props.onChange) this.props.onChange(e);
  }

  loadOptions(value, option) {
    return new Promise((resolve, reject) => {
      if (this.promiseTimeout) {
        clearTimeout(this.promiseTimeout);
      }
      this.promiseTimeout = setTimeout(() => {
        this.props
          .loadOptions(value, option)
          .then(response => {
            const count = response.length > 1;
            if (count) {
              this.setState({
                options: response,
                selectedOption: this.chooseOption(this.props.value)
              });
            } else {
              this.setState({
                options: response,
                selectedOption: this.chooseOption(this.props.value) || response[0]
              });
            }

            resolve(response);
          })
          .catch(reject);
      }, this.props.debounceTimeInMillis);
    });
  }

  chooseOption(e) {
    let value = e && e.value ? e.value : e;
    return !!this.state.options ? this.state.options.filter(el => el.value === value)[0] : null;
  }

  onFocusHandler(ev) {
    const { onFocus } = this.props;
    if (onFocus) onFocus(ev);
  }

  onBlurHandler(ev) {
    this.setIsFocused(false);
    const { onBlur } = this.props;
    if (onBlur) onBlur(ev);
  }

  onInputChange(value) {
    this.setIsFocused(false);
    if (value) this.setState({ isSearched: 'btn_add_option' });
    else this.setState({ isSearched: '' });
    if (this.props.onInputChange) this.props.onInputChange(value);
  }

  onInputKeyDown(ev) {
    this.setIsFocused(false);
    if (this.props.onInputKeyDown) this.props.onInputKeyDown(ev);
  }

  render() {
    return (
      <SelectWrapper
        className={[
          `${this.state.isFocused ? 'isFocusedWrapper' : ''}`,
          this.props.className || ''
        ].join('')}>
        <Text>{this.props.text}</Text>
        {this.props.errorMessage ? (
          <div className="validation_msg">
            <span className="validation">{this.props.errorMessage}</span>
            <ErrorIcon />
          </div>
        ) : null}
        <Select
          {...this.props}
          defaultOptions={true}
          key={this.props.key || 'key'}
          loadOptions={this.loadOptions}
          isSearchable
          classNamePrefix="react-select"
          className={` react-select-container ${this.state.isFocused && 'isFocused'}  ${
            this.state.isSearched
          }`}
          isValidNewOption={() => this.props.isCreatable && `${this.props.isValidNewOption}`}
          loadingMessage={() => `${this.props.loadingMessage}`}
          onChange={this.handleChange}
          placeholder={this.props.placeholder || 'Selecione'}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onMenuOpen={() => {
            this.setIsFocused(true);
          }}
          onMenuClose={() => {
            this.setIsFocused(false);
          }}
          noOptionsMessage={() => `${this.props.notFoundMessage}`}
          openMenuOnFocus={this.props.openMenuOnFocus}
          value={this.state.selectedOption}
          autoComplete={!!this.props.autoComplete}
          onInputChange={this.onInputChange}
          closeMenuOnSelect
          formatCreateLabel={() => this.props.newEntryMessage}
          valueKey="value"
          labelKey="label"
          allowCreateWhileLoading={this.props.isCreatable}
          createOptionPosition={this.props.createOptionPosition || 'last'}
        />
      </SelectWrapper>
    );
  }
}
