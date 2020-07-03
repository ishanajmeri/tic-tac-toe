import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
