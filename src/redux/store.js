import { createStore, applyMiddleware } from 'redux';

// Middleware
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // setting up middlewares

const store = createStore( rootReducer, applyMiddleware(logger));

export default store;