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

  deleteItem = idx => {
    this.setState({ items: this.state.items.filter((_, itemIdx) => idx !== itemIdx) })
  }

  render() {
    return (
      <div>
        <MultiInput
          items={this.state.items}
          updateText={this.updateText.bind(this)}
          addItem={this.addItem.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
        />
      </div>
    );
  }
}

export default StateProvider;