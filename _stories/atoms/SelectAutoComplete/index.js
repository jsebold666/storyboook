import React, { Component } from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import SelectAutoComplete from '../../../components/atoms/SelectAutoComplete';
import { func } from 'prop-types';

const VALUES = object('Options', [
  { label: 'Label 1', value: '1' },
  { label: 'Label 2', value: '2' },
  { label: 'Label 3', value: '3' }
]);

function loadOptions(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      let options = VALUES;
      if (value) {
        options = VALUES.filter(e => {
          const label = e.label.toLowerCase();
          const val = value.toLowerCase();
          return label.includes(val);
        });
      }
      resolve(options);
    }, 1000);
  });
}

const component = () => (
  <div>
    <SelectAutoComplete
      text={text('text', 'text')}
      name={text('name', 'name')}
      placeholder={text('placeholder', 'Select option')}
      newEntryMessage={text('newEntryMessage', 'Add New Label')}
      loadingMessage={text('loadingMessage', 'Loading')}
      errorMessage={text('errorMessage', '')}
      notFoundMessage={text('notFoundMessage', 'What you looked for was not found.')}
      isCreatable={boolean('isCreatable', true)}
      debounceTimeInMillis={500}
      onCreateOption={action('onCreateOption')}
      isValidNewOption={boolean('isValidNewOption', true)}
      onChange={action('onChange')}
      openMenuOnFocus={action('openMenuOnFocus')}
      autoComplete={action('autoComplete')}
      showOptions={action('showOptions')}
      createOptionPosition={action('createOptionPosition')}
      loadOptions={loadOptions}
    />
  </div>
);

export default [readme, component];
