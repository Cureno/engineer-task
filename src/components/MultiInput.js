import './MultiInput.css';
import React, { Component } from 'react';
import InputElement from './InputElement';
import OtherComponent from './OtherComponent';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

class MultiInput extends Component {

  render() {

    const { items, updateText, addItem, deleteItem, onChange } = this.props

    const renderedItems = items.map((text, idx) => {

      const properties = {
        onTypingInsideTextInput: e => updateText(idx, e),
        label: "test attribute",
        text,
        onClickDeleteButton: _ => deleteItem(idx),
        key: idx,
        id: `element-${idx}`
      }

      return idx < items.length - 1 ?
        <InputElement {...properties} /> :
        <InputElement {...properties} autoFocus={true} /> // put the focus to an appropriate place
    })

    return (
      <div className="Multi-input" >
        <OtherComponent>Test</OtherComponent>
        <ul>
          {renderedItems}
          <InputElement
            onTypingInsideTextInput={e => addItem(items.length, e)}
            deletable={false}
            key={items.length} />
        </ul>

        <Buttons onClickSaveButton={_ => onChange(items)}/>
      </div >
    )
  }

}

MultiInput.propTypes = {
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
}

export default MultiInput;