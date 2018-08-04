import React, { Component } from 'react';
import MultiInput from './MultiInput';


class StateProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        "first",
        "second",
        "third",
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
    const items = this.state.items
      .concat("")
      .map((originalText, itemIdx) => {
        return idx === itemIdx ?
          e.target.value :
          originalText
      })

      this.setState({ items })
  }

  deleteItem = idx => {
    this.setState({ items: this.state.items.filter((_, itemIdx) => idx !== itemIdx) })
  }

  onChange = items => {
    console.log('Called with: ', items)
  }

  render() {
    return (
      <MultiInput
        onChange={this.onChange}
        items={this.state.items}
        updateText={this.updateText}
        addItem={this.addItem}
        deleteItem={this.deleteItem} />
    )
  }
}

export default StateProvider;