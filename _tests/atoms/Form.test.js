/* globals mount */
import React from 'react';
import Form from '../../components/atoms/Form';

describe('Expect <Form>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
