import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './components/Home';
import ServiceDirectory from './components/ServiceDirectory';
import Contact from './components/Contact';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={ServiceDirectory}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}
