import React from 'react';
import { mount, shallow } from 'enzyme';
import DatepickerInput from '../../components/atoms/DatepickerInput';
import CircularProgress from '@material-ui/core/CircularProgress';

describe('DatepickerInput component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<DatepickerInput />);
    expect(wrapper.exists()).toBe(true);
  });
});
