/* globals mount */
import React from 'react';
import InputWrapper from '../../components/atoms/InputWrapper';

describe('Expect <InputWrapper>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<InputWrapper {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<InputWrapper {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
