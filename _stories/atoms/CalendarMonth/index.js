import React from 'react';
import { boolean, date } from '@storybook/addon-knobs';
import readme from './README.md';
import CalendarMonth from '../../../components/atoms/CalendarMonth';

function dateObjectKnob(name, defaultValue = new Date()) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const component = () => (
  <CalendarMonth
    sundayFirstDayOfWeek={boolean('sundayFirstDayOfWeek', false)}
    outlineToday={boolean('outlineToday', false)}
    viewDate={dateObjectKnob('viewDate')}
    selectedDate={dateObjectKnob('selectedDate')}
  />
);

export default [readme, component];
