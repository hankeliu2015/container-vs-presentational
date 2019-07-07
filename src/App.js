import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/nav'
// import Nav from './components/nav'

class App extends Component {
  render() {
    return (
      <div>
       <Nav />
      
      </div>
     );
  }
}

export default App;
