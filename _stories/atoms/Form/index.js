import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Form from '../../../components/atoms/Form';
import Validations from '../../../components/atoms/Validations';
import TextInput from '../../../components/atoms/TextInput';
import Submit from '../../../components/atoms/Submit';
import PasswordInput from '../../../components/atoms/PasswordInput/PasswordInput';

const style = { backgroundColor: '#f1f5f7', padding: '0 20px' };

let field1 = null;
let field2 = null;

const onSubmit = e => {
  console.log('Gone');
  action('submited');
};

const component = () => (
  <div style={style}>
    <br />
    <Form onSubmit={onSubmit}>
      <TextInput label="Usuário" validations={[Validations.required]} value={field1} />
      <br />
      <PasswordInput validations={[Validations.required]} label="Senha" value={field2} />
      <br />
      <TextInput label="Campo Opcional" value={field2} />
      <br />
      <Submit value="Submit" />
    </Form>
    <br />
  </div>
);

export default [readme, component];
