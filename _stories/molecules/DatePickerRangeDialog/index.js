import React from 'react';
import { boolean, date } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import readme from './README.md';
import { DatePickerRangeDialog } from '../../../components/molecules/DatePickerDialog';

const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), 5);
const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay() + 5);

const store = new Store({
  startDate: startDate,
  endDate: endDate
});

function dateObjectKnob(name, defaultValue = startDate) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const component = () => (
  <State store={store}>
    <DatePickerRangeDialog
      open={boolean('open', true)}
      sundayFirstDayOfWeek={boolean('sundayFirstDayOfWeek', true)}
      outlineToday={boolean('outlineToday', false)}
      allowClear={boolean('allowClear', false)}
      showHeader={boolean('showHeader', true)}
      autoOk={boolean('autoOk', false)}
      startDate={dateObjectKnob('startDate', store.get('startDate'))}
      endDate={dateObjectKnob('endDate', store.get('endDate'))}
      onChange={rangeObj => {
        console.log('onChange');
        store.set({ ...rangeObj });
      }}
      onClear={rangeObj => {
        console.log('onClear');
        console.log(rangeObj);
        store.set({ ...rangeObj });
      }}
    />
  </State>
);

export default [readme, component];
