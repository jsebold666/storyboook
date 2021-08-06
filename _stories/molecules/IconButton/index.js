import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import IconButton from '../../../components/molecules/IconButton';
import EyeIcon from '../../../components/atoms/Icons/Eye';
import colors from '../../../styles/colors';
import readme from './README.md';

const component = () => (
  <IconButton
    color={text('color', colors['bluey-grey'])}
    hoverColor={text('hoverColor', colors.periwinkle)}
    disabledHover={boolean('disabledHover', false)}
    text={text('text')}
    icon={EyeIcon}
  />
);

export default [readme, component];
