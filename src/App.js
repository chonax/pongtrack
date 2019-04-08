import React, { Component } from 'react';
import LeftBar from './Components/LeftBar/LeftBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftBar />
        <div className="main">Hi</div>
      </div>
    );
  }
}

export default App;
