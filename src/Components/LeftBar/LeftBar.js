import React, { Component } from 'react';

class LeftBar extends Component {
  render() {
    return (
      <div className="leftBar">
        <h1 className="logo">pOngtracker</h1>
        <ul className="nav">
          <li>Start a New Game</li>
          <li>Top 10 Players</li>
          <li>My Games</li>
          <li>My Profile</li>
          <li>Settings</li>
        </ul>
      </div>
    )
  }
}

export default LeftBar;