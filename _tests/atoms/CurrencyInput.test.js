import React from 'react';
import { mount, shallow } from 'enzyme';
import CurrencyInput from '../../components/atoms/CurrencyInput';
import CircularProgress from '@material-ui/core/CircularProgress';

const event = {
  preventDefault() {},
  key: 'Enter',
  target: { value: 'value' }
};

describe('CurrencyInput component', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<CurrencyInput />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call onClear callback function after erase icon is clicked', () => {
    const onClear = jest.fn();
    const wrapper = mount(<CurrencyInput onClear={onClear} />);

    wrapper.instance().onClickIconHandler();

    expect(wrapper.state().value).toBe('');
    expect(onClear.mock.calls.length).toEqual(1);
  });

  it('should not call onClear callback function', () => {
    const onClear = jest.fn();
    const wrapper = mount(<CurrencyInput />);

    wrapper.instance().onClickIconHandler();

    expect(wrapper.state().value).toBe('');
    expect(onClear.mock.calls.length).toEqual(0);
  });

  it('should call onBlur callback function and state changed to not focused', () => {
    const onBlur = jest.fn();
    const wrapper = mount(<CurrencyInput onBlur={onBlur} />);

    const input = wrapper.find('.box__container .box__wrapper .input__container input');
    input.prop('onBlur')(event);

    expect(wrapper.state().focused).toBe(false);
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  it('should not call onBlur callback function', () => {
    const onBlur = jest.fn();
    const wrapper = mount(<CurrencyInput />);

    const input = wrapper.find('.box__container .box__wrapper .input__container input');
    input.prop('onBlur')(event);

    expect(wrapper.state().focused).toBe(false);
    expect(onBlur.mock.calls.length).toEqual(0);
  });

  it('should call onChange callback fn', () => {
    const onChange = jest.fn();
    const wrapper = mount(<CurrencyInput onChange={onChange} />);

    const input = wrapper.find('.box__container .box__wrapper .input__container input');
    input.simulate('change', event);

    expect(onChange.mock.calls.length).toBe(2); // 1 normal onChange + 1 onChangeEvent do componente
  });

  it('should not call onChange callback fn', () => {
    const onChange = jest.fn();
    const wrapper = mount(<CurrencyInput />);

    const input = wrapper.find('.box__container .box__wrapper .input__container input');
    input.simulate('change', event);

    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should call onFocus state changed to focused', () => {
    const onFocus = jest.fn();
    const wrapper = mount(<CurrencyInput onFocus={onFocus} />);

    const input = wrapper.find('.box__container .box__wrapper .input__container input');
    input.prop('onFocus')(event);

    expect(wrapper.state().focused).toBe(true);
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  it('should not call onFocus callback', () => {
    const onFocus = jest.fn();
    const wrapper = mount(<CurrencyInput />);

    const input = wrapper.find('.box__container .box__wrapper .input__container input');
    input.prop('onFocus')(event);

    expect(wrapper.state().focused).toBe(true);
    expect(onFocus.mock.calls.length).toEqual(0);
  });

  it('should render loading icon', () => {
    const wrapper = mount(<CurrencyInput isLoading={true} />);

    const loadingIcon = wrapper
      .find('.box__container .box__wrapper .input__container')
      .find(CircularProgress);
    expect(loadingIcon.exists()).toBe(true);
  });

  it('should render error icon', () => {
    const wrapper = mount(<CurrencyInput hasError={true} />);

    const errorIcon = wrapper.find('.box__container .box__wrapper .input__container img');
    expect(errorIcon.prop('src')).toBe('/images/error_input.svg');
  });

  it('should render success icon', () => {
    const wrapper = mount(<CurrencyInput isValid={true} />);

    const successIcon = wrapper.find('.box__container .box__wrapper .input__container img');
    expect(successIcon.prop('src')).toBe('/images/success_input.svg');
  });

  it('should render erase icon', async () => {
    const wrapper = mount(<CurrencyInput enableClear={true} />);
    await wrapper.setState({ touched: true, focused: true });
    wrapper.update();
    const eraseIcon = wrapper.find('.box__container .box__wrapper .input__container img');
    expect(eraseIcon.prop('src')).toBe('/images/erase.svg');
  });

  it('should render error message label', () => {
    const wrapper = mount(<CurrencyInput errorMessage="login inválido" />);

    const label = wrapper.find('.box__container .box__wrapper .label__container label').at(1);
    expect(label.text()).toEqual('login inválido');
  });

  it('should render message label', () => {
    const wrapper = mount(<CurrencyInput message="limite 1000" />);

    const label = wrapper.find('.box__container .box__wrapper .label__container label').at(1);
    expect(label.text()).toEqual('limite 1000');
  });
});
