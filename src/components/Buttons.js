import React, { Component } from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';


class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <button className="Buttons-cancel-button">Cancel</button>
        <button onClick={this.props.onClickSaveButton} className="Buttons-save-button">Save</button>
      </div >
    );
  }
}

Buttons.propTypes = {
  onClickSaveButton: PropTypes.func.isRequired,
}

export default Buttons;