import React from 'react';
import { mount, shallow } from 'enzyme';
import Checkbox from '../../components/atoms/Checkbox';

const event = {
  preventDefault() {},
  target: {
    name: 'checkboxInput',
    value: 'value'
  }
};

describe('Checkbox component', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<Checkbox />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call onChange callback function', () => {
    const onChange = jest.fn();
    const onChange2 = jest.fn();

    const wrapper = shallow(<Checkbox onChange={onChange} />);
    const wrapper2 = shallow(<Checkbox />);

    const input = wrapper.find('Wrapper').find('Input');
    const input2 = wrapper2.find('Wrapper').find('Input');

    input.simulate('change', event);
    input2.simulate('change', event);

    expect(onChange.mock.calls.length).toEqual(1);
    expect(onChange2.mock.calls.length).toEqual(0);
  });
});
