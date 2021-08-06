import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchInput from '../../components/atoms/SearchInput';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '../../static/images/search.svg';

const event = {
  preventDefault() {},
  key: 'Enter',
  target: { value: 'value' }
};

describe('SearchInput component', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<SearchInput />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call onClickIcon callback function', () => {
    const onClickIcon = jest.fn();
    const wrapper = mount(<SearchInput onClickIcon={onClickIcon} />);

    const searchIcon = wrapper.find('SearchIcon');
    searchIcon.simulate('click', event);

    expect(onClickIcon.mock.calls.length).toEqual(1);
  });

  it('should not call onClickIcon callback function when input is disabled', () => {
    const onClickIcon = jest.fn();
    const wrapper = mount(<SearchInput onClickIcon={onClickIcon} disabled />);

    const searchIcon = wrapper.find('SearchIcon');
    searchIcon.simulate('click', event);

    expect(onClickIcon.mock.calls.length).toEqual(0);
  });

  it('should render search icon', () => {
    const wrapper = mount(<SearchInput />);

    const searchIcon = wrapper.find('SearchIcon');
    expect(searchIcon.exists()).toBe(true);
  });

  it('should render loading icon', () => {
    const wrapper = mount(<SearchInput isLoading={true} />);

    const loadingIcon = wrapper
      .find('.box__container .box__wrapper .input__container')
      .find(CircularProgress);
    expect(loadingIcon.exists()).toBe(true);
  });

  it('should render error message label', () => {
    const wrapper = mount(<SearchInput errorMessage="login inválido" />);

    const label = wrapper.find('.box__container .box__wrapper .label__container label').at(1);
    expect(label.text()).toEqual('login inválido');
  });

  it('should render message label', () => {
    const wrapper = mount(<SearchInput message="limite 1000" />);

    const label = wrapper.find('.box__container .box__wrapper .label__container label').at(1);
    expect(label.text()).toEqual('limite 1000');
  });
});
