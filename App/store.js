import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';

import reducers from './Reducers';

const loggerMiddleware = createLogger();
const reduxPromiseMiddleware = reduxPromise();


const middleware = [
  loggerMiddleware,
  reduxPromiseMiddleware,
  reduxThunk
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store;
