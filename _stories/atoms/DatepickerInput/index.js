import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, date } from '@storybook/addon-knobs';
import DatepickerInput from '../../../components/atoms/DatepickerInput';
import readme from './README.md';

function dateKnob(name, defaultValue) {
  const timestamp = date(name, defaultValue);
  return new Date(timestamp);
}

const component = () => {
  return (
    <div style={{ backgroundColor: '#f1f5f7', padding: '20px 20px' }}>
      <DatepickerInput
        label={text('label', 'Label')}
        isLoading={boolean('isLoading', false)}
        disabled={boolean('disabled', false)}
        message={text('message', 'Message')}
        hasError={boolean('hasError', false)}
        errorMessage={text('errorMessage', '')}
        invalidDateMessage={text('invalidDateMessage', '')}
        invalidMaxDateMessage={text('invalidMaxDateMessage', '')}
        invalidMinDateMessage={text('invalidMinDateMessage', '')}
        minDate={dateKnob('minDate')}
        maxDate={dateKnob('maxDate')}
      />
    </div>
  );
};

export default [readme, component];
