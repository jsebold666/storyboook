import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Navbar from '../../../components/atoms/Navbar';

const component = () => (
  <Navbar
    navText={text('value', 'Título')}
    isTransparent={boolean('isTransparent', false)}
    hideCloseIcon={boolean('hideCloseIcon', false)}
    showBackButton={boolean('showBackButton', true)}
    onGoBackClick={action('onGoBackClick')}
  />
);

export default [readme, component];
