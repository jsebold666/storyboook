import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Validations from '../../../components/atoms/Validations';

const component = () => (
  <Validations onChange={action('changed')} value={text('value', 'Validations content')} />
);

export default [readme, component];
