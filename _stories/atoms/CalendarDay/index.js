import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';

import readme from './README.md';
import CalendarDay from '../../../components/atoms/CalendarDay';

const component = () => (
  <CalendarDay
    selected={boolean('selected', false)}
    disabled={boolean('disabled', false)}
    outlined={boolean('outlined', false)}
    day={number('day', 1)}
  />
);

export default [readme, component];
