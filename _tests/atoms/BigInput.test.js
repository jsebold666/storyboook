/* globals mount */
import React from 'react';
import BigInput from '../../components/atoms/BigInput';

describe('Expect <BigInput>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<BigInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<BigInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
