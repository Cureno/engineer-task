import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <button className="Buttons-cancel-button">Cancel</button>
        <button onClick={this.props.onClick} className="Buttons-save-button">Save</button>
      </div >
    );
  }
}

export default Buttons;