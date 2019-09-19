import { createStore, applyMiddleware } from 'redux';

// Middleware
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // setting up middlewares

const store = createStore( rootReducer, applyMiddleware(logger) + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;