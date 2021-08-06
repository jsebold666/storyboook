import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import LoadingIcon from '../../../components/atoms/LoadingIcon';

const component = () => (
  <LoadingIcon onClick={action('clicked')} color={text('color', '')}>
    Btn Text
  </LoadingIcon>
);

export default [readme, component];
