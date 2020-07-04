import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './views/home';
import AiGame from './views/aigame';
import Players from './views/players';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>tic-tac-toe</title>
        </Helmet>
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
