import React, { Component } from 'react';
import styled from 'styled-components';
import shared from '../consts/shared';
import Navbar from './Navbar';

const Wrapper = styled.div`
  .option_selector_container {
    ul {
      list-style: none;
      padding: 0 5%;

      li {
        color: #acbec7;
        height: 60px;
        line-height: 58px;
        cursor: pointer;
        border-bottom: 1px solid ${shared['cloudy-blue']};

        img {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default class OptionSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderOptions() {
    if (!!this.props.options) {
      const result = this.props.options.map((item, idx) => {
        const klass = {
          color: `${shared[item.class]}`
        };

        return (
          <li key={idx} id={item.id} style={klass} onClick={this.handleSelectOption.bind(this)}>
            <img src={item.img} alt={item.text} />
            {item.text}
          </li>
        );
      });
      return result;
    }
  }

  handleSelectOption(ev) {
    this.props.onSelectOption(ev.target.id);
  }

  render() {
    return (
      <Wrapper>
        <div className="option_selector_container">
          <Navbar
            navText={this.props.navText}
            showBackButton={true}
            hideCloseIcon={true}
            onGoBackClick={this.props.onGoBackClick}
          />
          <ul>{this.renderOptions()}</ul>
        </div>
      </Wrapper>
    );
  }
}
