import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import InputWrapper from '../../../components/atoms/InputWrapper';

const component = () => (
  <InputWrapper onChange={action('changed')} value={text('value', 'InputWrapper content')} />
);

export default [readme, component];
