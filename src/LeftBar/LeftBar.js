import React, { Component } from 'react';
import Logo from '../Logo/Logo';

class LeftBar extends Component {
  render() {
    return (
      <div className="LeftBar">
        <Logo />
        <button>New Game</button>
        <button>Register Game</button>
        <button>Unfinished Games</button>
        <button>Player List</button>
        <button>Register</button>
        <button>Login/Logout</button>
        <button>Profile</button>
        <button>Settings</button>
      </div>
    );
  }
}

export default LeftBar;
