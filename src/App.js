import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
