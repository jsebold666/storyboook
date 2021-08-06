import React from 'react';
import { mount } from 'enzyme';
import AlertBox from '../../components/atoms/AlertBox';
import SuccessIcon from '../../static/images/success.svg';
import WarningIcon from '../../static/images/warning.svg';
import ErrorIcon from '../../static/images/error.svg';
import { Message } from '../../components/atoms/AlertBox/AlertBoxStyles.js';

describe('AlertBox Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<AlertBox type="warning" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should not render the icon', () => {
    const wrapper = mount(<AlertBox type="warning" showIcon={false} />);
    const icon = wrapper.find('.alert-box__icon');
    expect(icon.exists()).toBe(false);
  });

  it('should render the success icon', () => {
    const wrapper = mount(<AlertBox type="success" showIcon />);
    const icon = wrapper.find('SuccessIcon');
    expect(icon.exists()).toBe(true);
  });

  it('should render the warning icon', () => {
    const wrapper = mount(<AlertBox type="warning" showIcon />);
    const icon = wrapper.find('WarningIcon');
    expect(icon.exists()).toBe(true);
  });

  it('should render the error icon', () => {
    const wrapper = mount(<AlertBox type="error" showIcon />);
    const icon = wrapper.find('ErrorIcon');
    expect(icon.exists()).toBe(true);
  });

  it('should render the following message: "Tomador sem pendências"', () => {
    const wrapper = mount(<AlertBox type="success" message="Tomador sem pendências" />);
    const message = wrapper.find('Message');
    expect(message.text()).toEqual('Tomador sem pendências');
  });
});
