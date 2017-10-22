import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleLineChart from './SimpleLineChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Using Recharts</h1>
        </header>
        <p className="App-intro">
            Simple kickstart to any quick data visualizations I want to throw together using <a href="http://recharts.org/#/en-US">recharts</a>.
        </p>
          <SimpleLineChart></SimpleLineChart>
      </div>
    );
  }
}

export default App;
