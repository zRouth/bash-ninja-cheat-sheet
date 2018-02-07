import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://s3.amazonaws.com/codecademy-blog/assets/ninja_zpsa5dbe37a.jpg"} className="App-logo" alt="logo" />
          <h1 className="App-title">Bash Ninja Cheat Sheet</h1>
        </header>
        <p className="body-grid">
        Movement

        Go to last command typed
        up and down arrows
        </p>
      </div>
    );
  }
}

export default App;
