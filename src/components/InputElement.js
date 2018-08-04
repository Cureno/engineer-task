import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputElement.css';


class InputElement extends Component {
  render() {
    const { autoFocus, deletable, id, onClickDeleteButton, label, placeholder, text, onTypingInsideTextInput } = this.props;

    return (
      <li className="Input-element">
        <p>
          <label htmlFor={id}>{label}</label><br />
          <input
            autoFocus={autoFocus}
            id={id}
            placeholder={placeholder}
            onChange={onTypingInsideTextInput}
            value={text}
            type="text" />
        </p>
        {deletable ?
          <button onClick={onClickDeleteButton}>&times;</button> :
          <button style={{ visibility: "hidden" }}>&times;</button>}
      </li>
    )
  }
}

InputElement.defaultProps = {
  deletable: true,
  label: "",
  placeholder: "test attribute",
  text: "",
}

InputElement.propTypes = {
  autoFocus: PropTypes.bool,
  deletable: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onTypingInsideTextInput: PropTypes.func.isRequired,
  onClickDeleteButton: PropTypes.func,
  placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default InputElement;