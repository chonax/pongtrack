import React, { Component } from 'react';
import TopTen from '../TopTen/TopTen';
import Logo from '../../Logo/Logo';

class Main extends Component {
  render() {
    return (
      <div className="Main container">
        <div className="BlueTile RecentGames">Recent Games</div>
        <TopTen />
      </div>
    );
  }
}

export default Main;
