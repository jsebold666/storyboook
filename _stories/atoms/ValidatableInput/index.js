import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import ValidatableInput from '../../../components/atoms/ValidatableInput';

const component = () => (
  <ValidatableInput
    onChange={action('changed')}
    value={text('value', 'ValidatableInput content')}
  />
);

export default [readme, component];
