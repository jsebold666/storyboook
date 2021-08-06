/* globals mount */
import React from 'react';
import Clipboard from '../../components/atoms/Clipboard';

describe('Expect <Clipboard>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<Clipboard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<Clipboard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
