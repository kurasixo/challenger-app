import {
  combineReducers,
  applyMiddleware,
  createStore as _createStore,
} from 'redux';

import { reducer as authReducer } from './src/modules/auth';

const createStore = (data) => {
  const rootReducer = combineReducers({
    auth: authReducer,
  });

  const store = _createStore(rootReducer, data, applyMiddleware());
  return store;
};

export default createStore;
