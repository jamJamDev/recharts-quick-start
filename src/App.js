import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleLineChart from './SimpleLineChart.js';
import image from './images/title.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} />
        </header>
      <div className="chart-area"><SimpleLineChart></SimpleLineChart></div>
      </div>
    );
  }
}

export default App;
