import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import index from './../server/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href='http://localhost:3334/auth'>
        <button>LOGIN</button>
        </a>
      </div>
    );
  }
}

export default App;
