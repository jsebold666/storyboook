/* globals mount */
import React from 'react';
import ValidatableInput from '../../components/atoms/ValidatableInput';

describe('Expect <ValidatableInput>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<ValidatableInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<ValidatableInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
