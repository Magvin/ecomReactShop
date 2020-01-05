import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// Middleware
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Sagas
import  rootSaga   from './root-saga'

import rootReducer from './root-reducer';

// Creating Saga Middlewares
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; // setting up middlewares
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore( rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
