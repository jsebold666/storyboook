/* globals mount */
import React from 'react';
import TextInput from '../../components/atoms/TextInput';

describe('Expect <TextInput>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<TextInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<TextInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
