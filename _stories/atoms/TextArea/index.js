import React from 'react';
import { text } from '@storybook/addon-knobs';
import readme from './README.md';
import TextArea from '../../../components/atoms/TextArea';

const component = () => (
  <div style={{ backgroundColor: '#f1f5f7', padding: '20px 20px' }}>
    <TextArea label={text('label', 'Label')} />
  </div>
);

export default [readme, component];
