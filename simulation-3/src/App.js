import React, { Component } from 'react';
import Auth from './components/Login/Login.js'

import './App.css';
// import index from './../server/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
