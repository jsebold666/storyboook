/* globals mount */
import React from 'react';
import TagButton from '../../components/atoms/TagButton';

describe('Expect <TagButton>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<TagButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<TagButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
