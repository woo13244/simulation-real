import React, { Component } from 'react';
import Auth from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
// import index from './../server/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path='/' component={Auth}/>
          <Route path='/dashboard' component={Dashboard}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
