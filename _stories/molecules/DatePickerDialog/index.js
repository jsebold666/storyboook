import React from 'react';
import { boolean, date } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import readme from './README.md';
import DatePickerDialog from '../../../components/molecules/DatePickerDialog';

const store = new Store({
  selectedDate: null
});

function dateObjectKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const component = () => (
  <State store={store}>
    <DatePickerDialog
      open={boolean('open', true)}
      sundayFirstDayOfWeek={boolean('sundayFirstDayOfWeek', true)}
      outlineToday={boolean('outlineToday', false)}
      allowClear={boolean('allowClear', false)}
      showHeader={boolean('showHeader', true)}
      autoOk={boolean('autoOk', false)}
      selectedDate={dateObjectKnob('selectedDate', store.get('selectedDate'))}
      onChange={date => {
        console.log('onChange');
        console.log(date);
        store.set({ selectedDate: date });
      }}
      onClear={date => {
        console.log('onClear');
        console.log(date);
        store.set({ selectedDate: date });
      }}
      onClose={date => {
        console.log('onClose');
        console.log(date);
        store.set({ selectedDate: date });
      }}
    />
  </State>
);

export default [readme, component];
