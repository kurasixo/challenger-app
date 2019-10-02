import {
  combineReducers,
  applyMiddleware,
  createStore as _createStore,
} from 'redux';

import { reducer as authReducer } from '../client/modules/auth';

const middlewares = [];
const createStore = (data = {}) => {
  const rootReducer = combineReducers({
    auth: authReducer,
  });

  const store = _createStore(rootReducer, data, applyMiddleware(...middlewares));
  return store;
};

export default createStore;
