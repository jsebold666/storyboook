import React from 'react';
import { boolean, date } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import readme from './README.md';
import Calendar from '../../../components/molecules/Calendar';

const store = new Store({
  selectedDate: new Date()
});

function dateObjectKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const component = () => (
  <State store={store}>
    <Calendar
      sundayFirstDayOfWeek={boolean('sundayFirstDayOfWeek', false)}
      outlineToday={boolean('outlineToday', false)}
      selectedDate={dateObjectKnob('selectedDate', store.get('selectedDate'))}
      onChange={date => {
        store.set({ selectedDate: date });
      }}
    />
  </State>
);

export default [readme, component];
