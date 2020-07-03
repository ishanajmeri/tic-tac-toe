import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home';
import './App.css';
import AiGame from './views/aigame';
import Players from './views/players';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={AiGame} path="/ai" />
          <Route exact component={Players} path="/players" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
