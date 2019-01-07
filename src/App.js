import React, { Component } from 'react';
import './App.css';
import LeftBar from './LeftBar/LeftBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftBar />
        <div className="Main">
          test
        </div>
      </div>
    );
  }
}

export default App;
