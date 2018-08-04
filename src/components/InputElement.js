import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputElement.css';


class InputElement extends Component {
  render() {
    const { autoFocus, deletable, deleteItem, label, placeholder, text, onChange } = this.props;

    return (
      <li className="Input-element">
        <p>
          <label htmlFor="">{label}</label><br />
          <input
            autoFocus={autoFocus}
            onChange={onChange}
            value={text}
            placeholder={placeholder}
            type="text" />
        </p>
        {deletable ?
          <button onClick={deleteItem}>&times;</button> :
          <button style={{ visibility: "hidden" }}>&times;</button>}
      </li>
    )
  }
}


InputElement.propTypes = {
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  deletable: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func,
  text: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default InputElement;