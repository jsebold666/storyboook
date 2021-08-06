import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import PdfIcon from '../../../components/atoms/Icons/Pdf';
import colors from '../../../styles/colors';
import readme from './README.md';

const component = () => (
  <PdfIcon
    color={text('color', colors['bluey-grey'])}
    hoverColor={text('hoverColor', colors.periwinkle)}
    disabledHover={boolean('disabledHover', false)}
  />
);

export default [readme, component];
