import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// Middleware
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Sagas
import { fetchCollectionsStart } from './../redux/shop/shop.saga';

import rootReducer from './root-reducer';

// Creating Saga Middlewares
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; // setting up middlewares
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore( rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store);
