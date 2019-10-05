import {
  combineReducers,
  createStore as _createStore,
  applyMiddleware as _applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as authReducer } from '../client/modules/auth';
import { reducer as windowsReducer } from '../client/modules/windows';

const middlewares = [];

const applyMiddleware = (_middlewares) => {
  return composeWithDevTools(_applyMiddleware(..._middlewares));
};

const createStore = (data = {}) => {
  const rootReducer = combineReducers({
    auth: authReducer,
    windows: windowsReducer,
  });

  const store = _createStore(rootReducer, data, applyMiddleware(middlewares));
  return store;
};

export default createStore;
