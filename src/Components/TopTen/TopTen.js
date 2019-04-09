import React, { Component } from 'react';

class TopTen extends Component {
  render() {
    return (
      <div className="BlueTile TopTen">
        <h2>Top Ten Players</h2>
        <ul>
        <li>
            <div className="playerName">Rob</div>
            <div className="playerRanking">1000</div>
          </li>
          <li>
            <div className="playerName">Chris</div>
            <div className="playerRanking">994</div>
          </li>
          <li>
            <div className="playerName">Kate</div>
            <div className="playerRanking">986</div>
          </li>
          <li>
            <div className="playerName">Jonathan</div>
            <div className="playerRanking">954</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopTen;
