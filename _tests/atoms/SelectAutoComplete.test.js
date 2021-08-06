/* globals mount */
import React from 'react';
import SelectAutoComplete from '../../components/atoms/SelectAutoComplete';

describe('Expect <SelectAutoComplete>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<SelectAutoComplete {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<SelectAutoComplete {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
