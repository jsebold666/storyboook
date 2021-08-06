import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Button from '../../../components/atoms/Button';

const options = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const component = () => (
  <Button
    isLoading={boolean('isLoading', false)}
    onClick={action('button_clicked')}
    showIcon={boolean('showIcon', false)}
    className={text('class', '')}
    disabled={boolean('disabled', false)}
    size={select('Size', options)}>
    Btn Text
  </Button>
);

export default [readme, component];
