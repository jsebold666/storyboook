import React from 'react';
import GrayBox from '../../components/atoms/GrayBox';
import { mount } from 'enzyme';

describe('GrayBox', () => {
  it('should mount', () => {
    const wrapper = mount(<GrayBox />);
    expect(wrapper.exists()).toBe(true);
  });
});
