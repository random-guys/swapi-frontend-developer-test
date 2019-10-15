import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../pages/Home';
import ShipPage from '../pages/ShipPage';
import PlanetPage from '../pages/PlanetPage';
import CharacterPage from '../pages/CharacterPage';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/starships/:slug" component={ShipPage} />
        <Route path="/planets/:slug" component={PlanetPage} />
        <Route path="/characters/:slug" component={CharacterPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
