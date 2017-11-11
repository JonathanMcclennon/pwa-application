import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import PayPerView from './PPV';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
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
