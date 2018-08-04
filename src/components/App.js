import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  StateProvider from './StateProvider'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Welcome to the solution of the engineering task</h3>
        </header>
        <p>
          For the source code, please visit <a href="http://www.github.com/Cureno/engineer-task">github.com/Cureno/engineer-task</a>
        </p>
        <p>
           The multi input component can be found at <code>src/components/MultiInput.js</code>
        </p>
        <br/>
        <br/>
        <br/>
        <StateProvider/>
      </div>
    );
  }
}

export default App;
