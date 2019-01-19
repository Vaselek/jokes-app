import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JokesIndex from "./containers/JokesIndex/JokesIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokesIndex />
      </div>
    );
  }
}

export default App;
