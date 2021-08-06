import React from 'react';
import { boolean, date } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import readme from './README.md';
import { CalendarRange } from '../../../components/molecules/Calendar';

const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), 5);
const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay() + 5);

const store = new Store({
  startDate: null,
  endDate: null
});

function dateObjectKnob(name, defaultValue = startDate) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const onChangeHandler = date => {
  console.log(date);
};

const component = () => (
  <State store={store}>
    <CalendarRange
      sundayFirstDayOfWeek={boolean('sundayFirstDayOfWeek', false)}
      outlineToday={boolean('outlineToday', false)}
      startDate={dateObjectKnob('startDate', store.get('startDate'))}
      endDate={dateObjectKnob('endDate', store.get('endDate'))}
      onChange={onChangeHandler}
    />
  </State>
);

export default [readme, component];
