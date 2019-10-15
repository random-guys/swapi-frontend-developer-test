import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './style.css';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(app, document.getElementById('root'));
