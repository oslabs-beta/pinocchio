/* eslint-disable import/no-unresolved */ // * be careful
// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </div>
);

export default App;
