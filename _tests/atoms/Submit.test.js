/* globals mount */
import React from 'react';
import Submit from '../../components/atoms/Submit';

describe('Expect <Submit>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<Submit {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<Submit {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
