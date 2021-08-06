import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import TextInput from '../../../components/atoms/TextInput';

const component = () => (
  <div style={{ backgroundColor: '#f1f5f7', padding: '20px 20px' }}>
    <TextInput
      onChange={action('changed')}
      label={text('label', 'label')}
      id={text('id', 'id')}
      name={text('name', 'name')}
      errorMessage={text('errorMessage', 'errorMessage')}
      placeholder={text('placeholder', 'placeholder')}
      isValid={boolean('isValid', true)}
      enableClear={boolean('enableClear', true)}
      value={text('value', 'value')}
    />
  </div>
);

export default [readme, component];
