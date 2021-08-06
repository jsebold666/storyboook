import React from 'react';

import CurrencyInput from '../../../components/atoms/CurrencyInput';
import readme from './README.md';

const component = () => {
  return (
    <div style={{ backgroundColor: '#f1f5f7', padding: '20px 20px' }}>
      <CurrencyInput label="label" message="message" />
    </div>
  );
};

export default [readme, component];
