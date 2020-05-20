import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Note from './pages/Notes'
import Menu from './pages/Menu'
import Converter from './pages/Converter'

export default class App extends Component {

  render () {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Notes">
              <Note />
            </Route>
            <Route exact path="/Converter">
              <Converter />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
