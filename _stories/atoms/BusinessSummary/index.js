import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import BusinessSummary from '../../../components/atoms/BusinessSummary';

const component = () => (
  <BusinessSummary
    onChange={action('changed')}
    totalValue={number('totalValue', 1)}
    anualChange={number('anualChange', -2)}
    labels={[
      text('label1', 'PRÊMIO R$'),
      text('label2', 'Total Ano'),
      text('label3', 'Ano passado'),
      text('label4', 'Mês passado')
    ]}
    monthlyChange={number('monthlyChange', 3)}
  />
);

export default [readme, component];
