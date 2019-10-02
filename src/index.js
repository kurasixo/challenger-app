import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import Root from './Root';
import createStore from '../createStore';

const store = createStore(window.__data);

hydrate(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
