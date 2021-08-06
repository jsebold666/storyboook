import React, { Component } from 'react';
import idGenerator from 'react-id-generator';

export const FormContext = React.createContext({
  register: () => {}
});
export const uid = idGenerator;

export default class Form extends Component {
  constructor() {
    super();
    this.validations = {};
    this.getChildValue = {};
    this.errors = {};
    this.updateChildState = {};
  }

  runValidations(id) {
    const validations = this.validations[id] || [];
    const value = this.getChildValue[id]();
    this.errors[id] = validations.map(validation => validation(value));
    this.updateChildState[id]({ validationError: this.errors[id][0] });
  }

  register(context) {
    const id = context.uid;
    this.validations[id] = context.props.validations || [];
    this.updateChildState[id] = context.setState.bind(context);
    this.getChildValue[id] = function() {
      return this.state.value;
    }.bind(context);
  }

  validateAll() {
    Object.keys(this.validations).forEach(id => {
      this.runValidations(id);
    });
  }

  countFieldsWithErrors() {
    return Object.keys(this.errors).filter(id => this.errors[id][0]).length;
  }

  onSubmit(e) {
    e.preventDefault();
    this.validateAll();
    if (this.countFieldsWithErrors() === 0) {
      console.log('Submiting form...');
      this.props.onSubmit && this.props.onSubmit(e);
    } else {
      console.log('Form has errors: ', this.errors);
    }
  }

  render() {
    return (
      <FormContext.Provider value={this}>
        <form {...this.props} onSubmit={this.onSubmit.bind(this)}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    );
  }
}
