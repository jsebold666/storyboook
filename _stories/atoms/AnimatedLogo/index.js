import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { AnimatedLogo } from '../../../components/atoms/Icons/Logo';
import readme from './README.md';

const component = () => <AnimatedLogo />;

export default [readme, component];
