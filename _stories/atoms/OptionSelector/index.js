import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import OptionSelector from '../../../components/atoms/OptionSelector';

const OPTIONS = [
  {
    id: 'item-1',
    class: 'tealish',
    img: 'http://localhost:3000/images/quote-completed-status-icon.svg',
    text: 'Pago'
  },
  {
    id: 'item-2',
    class: 'pale-orange',
    img: 'http://localhost:3000/images/quote-attention-status-icon.svg',
    text: 'A vencer'
  },
  {
    id: 'item-3',
    class: 'orchid',
    img: 'http://localhost:3000/images/quote-overpass-status-icon.svg',
    text: 'Vencido'
  },
  {
    id: 'item-4',
    class: 'orchid',
    img: 'http://localhost:3000/images/quote-overpass-status-icon.svg',
    text: 'Bloqueado'
  }
];

const component = () => (
  <OptionSelector
    options={OPTIONS}
    onSelectOption={action('onSelectOption')}
    onGoBackClick={action('onGoBackClick')}
    navText={text('value', 'Status')}
  />
);

export default [readme, component];
