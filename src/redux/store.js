import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// Middleware
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // setting up middlewares

export const store = createStore( rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
