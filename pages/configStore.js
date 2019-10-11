import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../components/rootReducer';

const saga = createSagaMiddleware();

const initializeStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(saga)
    );

    return store;
};

export default initializeStore;
