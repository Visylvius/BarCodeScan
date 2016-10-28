import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from './Reducers';

const loggerMiddleware = createLogger();

const middleware = [
  loggerMiddleware
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store;
