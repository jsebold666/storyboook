import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import TagButton from '../../../components/atoms/TagButton/';

const component = () => (
  <TagButton
    onClick={() => {
      action('onClick');
      alert('onClick');
    }}
    onClear={() => {
      action('onClear');
      alert('onClear');
    }}
    text={text('value', 'Clique aqui')}
    active={boolean('active', false)}
    disabled={boolean('disabled', false)}
  />
);

export default [readme, component];
