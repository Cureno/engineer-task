import './MultiInput.css';
import React, { Component } from 'react';
import InputElement from './InputElement';
import OtherComponent from './OtherComponent';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

class MultiInput extends Component {

  render() {

    const { items, updateText, addItem, deleteItem } = this.props

    const renderedItems = items.map((text, idx) => {

      const properties = {
        onChange: e => updateText(idx, e),
        label: "test attribute",
        placeholder: "test attribute",
        text,
        deletable: true,
        deleteItem: _ => deleteItem(idx),
        key: idx
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
            onChange={e => addItem(items.length, e)}
            placeholder={"test attribute"}
            text={""}
            deletable={false}
            key={items.length} />
        </ul>

        <Buttons onClick={e => this.props.onChange(items)}/>
      </div >
    )
  }

}

MultiInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateText: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteIem: PropTypes.func,
}

export default MultiInput;