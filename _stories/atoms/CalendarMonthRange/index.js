import React from 'react';
import { boolean, date } from '@storybook/addon-knobs';
import readme from './README.md';
import { CalendarMonthRange } from '../../../components/atoms/CalendarMonth';

const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), 5);
const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay() + 5);

function dateObjectKnob(name, defaultValue = startDate) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

const component = () => (
  <CalendarMonthRange
    sundayFirstDayOfWeek={boolean('sundayFirstDayOfWeek', false)}
    outlineToday={boolean('outlineToday', false)}
    viewDate={dateObjectKnob('viewDate')}
    startDate={dateObjectKnob('startDate', startDate)}
    endDate={dateObjectKnob('endDate', endDate)}
  />
);

export default [readme, component];
