#!/usr/bin/env node
const prog = require('caporal');
const fs = require('fs');

const COMPONENT_TYPES = {
  'atom': { path: 'atoms' },
  'molecule': { path: 'molecules' },
}

prog
  .version('1.0.0')
  .argument('<type>', 'Type of the component (atomic design)')
  .argument('<name>', 'Name of the component to create')
  .action(function(args, options, logger) {
    const { type, name } = args;
    const componentPath = COMPONENT_TYPES[type].path;

    saveContentOnFile(`./_stories/${componentPath}/${name}`, 'index.js', getStoryIndex(name, componentPath));
    saveContentOnFile(`./_stories/${componentPath}/${name}`, 'README.md', getStoryDescription(name));
    saveContentOnFile(`./_tests/${componentPath}/`, `${name}.test.js`, getTest(name, componentPath));
    saveContentOnFile(`./components/${componentPath}/${name}`, `${name}.jsx`, getComponent(name));
    saveContentOnFile(`./components/${componentPath}/${name}`, `index.js`, getComponentIndexFile(name));
    addToComponentsIndex(name, componentPath);
  });

function saveContentOnFile(dir, filename, content) {
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  var stream = fs.createWriteStream(`${dir}/${filename}`);
  stream.once('open', function(fd) {
    stream.write(content);
    stream.end();
  });
}

function getComponentIndexFile(name) {
  return `export { default } from './${name}';`;
}

function getStoryIndex(name, path) {
  return `import React from 'react';
import { text, selectV2 as select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import ${name} from '../../../components/${path}/${name}';

const component = () => (
  <${name}
    onChange={action('changed')}
    value={text('value', '${name} content')}>
  </${name}>
);

export default [readme, component];
`
}

function getTest(name, path) {
  return `/* globals mount */
import React from 'react';
import ${name} from '../../components/${path}/${name}';
  
describe('Expect <${name}>', () => {
  it('to render', () => {
    const props = {
      value: 'This is text',
      onChange: () => {}
    };

    const wrapper = mount(<${name} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('to render properly with empty', () => {
    const props = {
      value: '',
      onChange: () => {}
    };

    const wrapper = mount(<${name} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});`
}

function getComponent(name) {
  return `import React, { Component } from "react";
import styled from 'styled-components';
import shared from '../../consts/shared';

const Input = styled.input\`
  color: \${shared['bluey-grey']}; 
  background-color: \${props => props.isDisabled ? "#f1f5f7" : 'white' };

  input:focus {
      color: \${shared['slate']}; 
  }
\`

export default class ${name} extends Component {
  render() {
    return <Input {...this.props} />;
  }
}`;
}

function addToComponentsIndex(name, path) {
  var data = fs.readFileSync('./components/index.js').toString().split("\n");
  data.splice(2, 0,  `export { default as ${name} } from './${path}/${name}';`);
  var text = data.join("\n");

  fs.writeFile('./components/index.js', text, function (err) {
    if (err) return console.log(err);
  });
}

function getStoryDescription(name) {
  return `The \`<${name}>\` component.`
}

prog.parse(process.argv);