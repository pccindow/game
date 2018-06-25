import React from 'react';
//import ReactDOM from 'react-dom';
//import React, { Component } from 'react';
import './App.css';
import Countdown from './countdown.js';
import FindWords from './findwords.js';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = { title: 'Entre le mot le plus rapidement possible' }
  }
  render() {
    return (
      <div id="box-content">
        <h1> {this.state.title} </h1>
        <Countdown />
        <FindWords />
      </div>
    );
  }
}

export default App;
