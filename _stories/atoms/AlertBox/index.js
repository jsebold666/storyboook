import React from 'react';
import AlertBox from '../../../components/atoms/AlertBox';
import { text, boolean, select } from '@storybook/addon-knobs';
import readme from './README.md';

const typeOptions = {
  error: 'error',
  warning: 'warning',
  success: 'success'
};

const component = () => (
  <AlertBox
    type={select('type', typeOptions, 'success')}
    message={text('Mensagem', 'Mensagem')}
    showIcon={boolean('ShowIcon', true)}
  />
);

export default [readme, component];
