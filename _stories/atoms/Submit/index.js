import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Submit from '../../../components/atoms/Submit';

const component = () => (
  <Submit onChange={action('changed')} value={text('value', 'Submit content')} />
);

export default [readme, component];
