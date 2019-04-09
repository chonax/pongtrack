import React, { Component } from 'react';
import './App.css';
import LeftBar from './Components/LeftBar/LeftBar';
import Main from './Components/Main/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <LeftBar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
