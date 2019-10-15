import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const middleware = [thunk];
const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

export default () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middleware),
      __REDUX_DEVTOOLS_EXTENSION__ ? __REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );
  return store;
};
