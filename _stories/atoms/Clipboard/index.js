import React from 'react';
import Clipboard from '../../../components/atoms/Clipboard';
import readme from './README.md';

const getText = () => 'Texto copiado para o clipboard...';

const component = () => <Clipboard getText={getText}>Clique aqui para copiar</Clipboard>;

export default [readme, component];
