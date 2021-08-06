import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import GrayBox from '../../../components/atoms/GrayBox';
import readme from './README.md';

const messageSizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const component = () => {
  return (
    <GrayBox
      label={text('label', 'Label')}
      message={text('message', 'message')}
      details={text('details', 'Details')}
      messageSize={select('messageSize', messageSizeOptions, 'medium')}
    />
  );
};

export default [readme, component];
