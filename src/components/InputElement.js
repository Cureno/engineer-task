import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputElement.css';


class InputElement extends Component {
  render() {
    const { deletable, deleteItem, label, placeholder, text, onChange } = this.props;

    return (
      <div className="Input-element">
        <label htmlFor="">{label}</label><br />
        <input onChange={onChange} value={text} placeholder={placeholder} type="text" />
        {deletable ? <button onClick={deleteItem}>&times;</button> : <button style={{ visibility: "hidden" }}>&times;</button>}
      </div>
    )
  }
}


InputElement.propTypes = {
  onChange: PropTypes.func.isRequired,
  deletable: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func,
  text: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default InputElement;