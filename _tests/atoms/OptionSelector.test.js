/* globals mount */
import React from 'react';
import OptionSelector from '../../components/atoms/OptionSelector';

describe('Expect <OptionSelector>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<OptionSelector {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<OptionSelector {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
