import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import PasswordInput from '../../../components/atoms/PasswordInput';

const component = () => (
  <PasswordInput onChange={action('changed')} value={text('value', 'PasswordInput content')} />
);

export default [readme, component];
