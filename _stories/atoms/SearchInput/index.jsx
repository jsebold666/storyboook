import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import readme from './README.md';
import SearchInput from '../../../components/atoms/SearchInput';

const component = () => {
  return (
    <div style={{ backgroundColor: '#f1f5f7', padding: '20px 20px' }}>
      <SearchInput
        isLoading={boolean('isLoading', false)}
        disabled={boolean('disabled', false)}
        label={text('label', 'Label')}
        mask={text('mask', '99.999.999/9999-99')}
        message={text('message', '')}
        hasError={boolean('hasError', false)}
        placeholder={text('placeholder')}
      />
    </div>
  );
};

export default [readme, component];
