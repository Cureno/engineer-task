import './MultiInput.css';
import React, { Component } from 'react';
import InputElement from './InputElement';
import MultiInputHeader from './MultiInputHeader';
import Buttons from './Buttons';

class MultiInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        "first",
        "second",
        "third",
        ""
      ]
    }
  }

  updateText = (idx, e) => {
    const items = this.state.items.map((originalText, itemIdx) =>
      idx === itemIdx ?
        e.target.value :
        originalText
    )
    this.setState({ items })
  }

  addItem = (idx, e) => {
    const items = this.state.items.map((originalText, itemIdx) => {
      return idx === itemIdx ?
        e.target.value :
        originalText
    }).concat("")

    this.setState({ items })
  }

  deleteIem = (idx, e) => {
    this.setState({ items: this.state.items.filter((_, itemIdx) => idx !== itemIdx) })
  }

  render() {
    const lastIdx = this.state.items.length - 1;

    const items = this.state.items.map((text, idx) => idx < lastIdx ?
      (
        <InputElement
          onChange={this.updateText.bind(this, idx)}
          label={"test attribute"}
          placeholder={"test attribute"}
          text={text}
          deletable={true}
          deleteItem={this.deleteIem.bind(this, idx)}
          key={idx} />
      ) :
      (
        <InputElement
          onChange={this.addItem.bind(this, idx)}
          placeholder={"test attribute"}
          text={text}
          deletable={false}
          key={idx} />
      )
    )

    return (
      <div className="Multi-input" >
        <MultiInputHeader name="Test" />
        {items}
        <Buttons />
      </div >
    )
  }

}

export default MultiInput;