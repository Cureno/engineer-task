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
        {
          label: "test attribute",
          text: "first"
        },
        {
          label: "test attribute",
          text: "second"
        },
        {
          label: "test attribute",
          text: "third"
        },
        {
          label: "",
          text: ""
        },
      ]
    };
  }


  updateText = (idx, e) => {
    e.preventDefault();
    const newText = e.target.value;
    const newItems = { ...this.state.items }
    const newState = { ...this.state, items: newItems }
    newState[idx].text = newText;
    this.setState(newState)


    // this.setState(prevState => {
    //   return { items: prevState.items[idx]}
    // })
  }

  addItem = (idx, e) => {
    e.preventDefault()
    const newItem = { label: "test attribute", text: "" };
    this.setState(prevState => {
      return { items: prevState.items.concat(newItem) }
    })
  }

  deleteIem = (idx, e) => {
    e.preventDefault()
    this.setState(prevState => {
      return (
        { items: prevState.items.filter((_, itemIdx) => itemIdx !== idx) }
      )
    })
  }

  render() {
    const lastIdx = this.state.items.length - 1;

    const items = this.state.items.map((elem, idx) => {

      return idx < lastIdx ?
        (
          <InputElement
            onChange={
              this.updateText.bind(this, idx)
            }
            label={elem.label}
            placeholder={elem.label}
            text={elem.text}
            deletable={true}
            deleteItem={this.deleteIem.bind(this, idx)}
            key={idx} />
        ) :
        (
          <InputElement
            onChange={e => {
              this.addItem(idx, e)
              this.updateText(idx, e)
            }
            }
            placeholder={"test attribute"}
            text={elem.text}
            deletable={false}
            key={idx} />
        )

    })

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