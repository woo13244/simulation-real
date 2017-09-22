import React, { Component } from 'react';
import Login from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
// import index from './../server/index'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path='/' component={Login}/>
          <Route path='/dashboard' component={Dashboard}/>
      </div>
    );
  }
}

export default App;
