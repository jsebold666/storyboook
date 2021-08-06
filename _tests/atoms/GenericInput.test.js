/* globals mount */
import React from 'react';
import GenericInput from '../../components/atoms/GenericInput';

describe('Expect <GenericInput>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<GenericInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<GenericInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
