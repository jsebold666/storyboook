import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import readme from './README.md';
import Checkbox from '../../../components/atoms/Checkbox';

const component = () => {
  return <Checkbox checked={boolean('checked', false)} label={text('label', 'Label')} />;
};

export default [readme, component];
