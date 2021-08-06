import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Atoms', module);
const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs);

var req = require.context('./', true, /^\.\/.+\/$/);
req.keys().forEach(key => {
  var libName = key
    .replace('.', '')
    .replace('/', '')
    .replace('/', '');
  if (libName.length > 2) {
    let lib = require(`./${libName}`).default;
    stories.add(libName, withReadme(...lib));
  }
});
