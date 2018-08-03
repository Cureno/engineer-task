import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  MultiInput from './MultiInput'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Welcome to the solution of the engineering task</h3>
        </header>
        <p>
          To look at the code, visit <a href="http://www.github.com/Cureno">github.com/Cureno</a>
        </p>
        <MultiInput/>
      </div>
    );
  }
}

export default App;
