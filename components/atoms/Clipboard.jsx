import React, { Component } from 'react';
import clipboard from 'clipboard-polyfill';

export default class Clipboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copiedText: false
    };
  }

  copy() {
    clipboard
      .writeText(this.props.getText())
      .then(
        function() {
          this.setState({
            copiedText: true
          });
        }.bind(this)
      )
      .catch(
        function() {
          this.setState({
            copiedText: false
          });
        }.bind(this)
      );
  }

  render() {
    return (
      <div {...this.props} onClick={this.copy.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}
