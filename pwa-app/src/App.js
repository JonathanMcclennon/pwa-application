import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import asyncComponent from './Asyncomp';

import './reset.css';
import './App.css';

import Home from './Home'
const PayPerView = asyncComponent(() => import('./PPV'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="pwa-app">
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/ppv/:id" component={PayPerView} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
