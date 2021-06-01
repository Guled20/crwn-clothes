import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const middilewares = [logger];
if (process.env.NODE_ENV === 'development') {
  middilewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middilewares));
export const persistor = persistStore(store);
