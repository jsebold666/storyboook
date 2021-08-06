/* globals mount */
import React from 'react';
import PasswordInput from '../../components/atoms/PasswordInput';

describe('Expect <PasswordInput>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<PasswordInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<PasswordInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
