import React from 'react';
import TextArea from '../../components/atoms/TextArea';
import { mount } from 'enzyme';

describe('TextArea', () => {
  it('should mount', () => {
    const wrapper = mount(<TextArea />);
    expect(wrapper.exists()).toBe(true);
  });
});
