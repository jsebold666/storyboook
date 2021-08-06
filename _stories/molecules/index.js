import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Calendar from './Calendar';
import CalendarRange from './CalendarRange';
import DatePickerDialog from './DatePickerDialog';
import DatePickerRangeDialog from './DatePickerRangeDialog';
import IconButton from './IconButton';

const stories = storiesOf('Molecules', module);
const storyWrapper = story => <div style={{ margin: '35px' }}>{story()}</div>;

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Calendar', withReadme(...Calendar))
  .add('CalendarRange', withReadme(...CalendarRange))
  .add('DatePickerDialog', withReadme(...DatePickerDialog))
  .add('DatePickerRangeDialog', withReadme(...DatePickerRangeDialog))
  .add('IconButton', withReadme(...IconButton));
