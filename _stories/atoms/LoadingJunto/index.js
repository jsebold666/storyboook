import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import LoadingJunto from '../../../components/atoms/LoadingJunto';

const component = () => <LoadingJunto />;

export default [readme, component];
