import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import BigInput from '../../../components/atoms/BigInput';

const component = () => (
  <BigInput
    onChange={action('changed')}
    isDisabled={boolean('isDisabled', false)}
    type={text('type', '')}
    value={text('value', 'value')}
  />
);

export default [readme, component];
