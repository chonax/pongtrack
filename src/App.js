import React, { Component } from 'react';
import './App.css';
import Logo from './Logo/Logo';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <WelcomeScreen />
      </div>
    );
  }
}

export default App;
