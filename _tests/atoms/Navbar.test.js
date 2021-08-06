/* globals mount */
import React from 'react';
import Navbar from '../../components/atoms/Navbar';

describe('Expect <Navbar>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<Navbar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<Navbar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
