import React from 'react';
import CardsElements from '../../../components/atoms/Illustrations/CardsElements';
import CheckSparkling from '../../../components/atoms/Illustrations/CheckSparkling';
import ClockSparkling from '../../../components/atoms/Illustrations/ClockSparkling';
import Sparkling from '../../../components/atoms/Illustrations/Sparkling';
import readme from './README.md';

class Example extends React.Component {
  illustrations = {
    CardsElements: CardsElements,
    CheckSparkling: CheckSparkling,
    ClockSparkling: ClockSparkling,
    Sparkling: Sparkling
  };

  state = {
    component: 'CardsElements'
  };

  render() {
    const ComponentToRender = this.illustrations[this.state.component];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>Choose the illustration you want to render: </p>
        <select
          onChange={event => this.setState({ component: event.target.value })}
          style={{ marginBottom: 36 }}>
          {Object.keys(this.illustrations).map((key, index) => <option key={index}>{key}</option>)}
        </select>

        <ComponentToRender />
      </div>
    );
  }
}

const component = () => <Example />;

export default [readme, component];
