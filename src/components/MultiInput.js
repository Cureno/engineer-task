import './MultiInput.css';
import React, { Component } from 'react';
import InputElement from './InputElement';
import MultiInputHeader from './MultiInputHeader';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

class MultiInput extends Component {

  render() {

    const { items, updateText, addItem, deleteItem } = this.props

    const lastIdx = items.length - 1;

    const renderedItems = items.map((text, idx) => idx < lastIdx ?
      (
        <InputElement
          onChange={e => updateText(idx, e)}
          label={"test attribute"}
          placeholder={"test attribute"}
          text={text}
          deletable={true}
          deleteItem={_ => deleteItem(idx)}
          key={idx} />
      ) :
      (
        <InputElement
          onChange={e => addItem(idx, e)}
          placeholder={"test attribute"}
          text={text}
          deletable={false}
          key={idx} />
      )
    )

    return (
      <div className="Multi-input" >
        <MultiInputHeader name="Test" />
        {renderedItems}
        <Buttons />
      </div >
    )
  }

}

MultiInput.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateText: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteIem: PropTypes.func,
}

export default MultiInput;