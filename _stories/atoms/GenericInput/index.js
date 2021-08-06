import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import GenericInput from '../../../components/atoms/GenericInput';

const component = () => (
  <GenericInput onChange={action('changed')} value={text('value', 'GenericInput content')} />
);

export default [readme, component];
