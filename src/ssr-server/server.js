import 'babel-polyfill';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from '../client/Root';
import createStore from '../core/createStore';

const PORT = 3000;
const app = express();

const store = createStore();
// TODO: move to serialize
const storeData = JSON.stringify(store.getState());

const clientScript = './react-app.js';
const reactRoot = ReactDOMServer.renderToString(<Root store={store} />);

app.use(express.static('build', { index: false }));
app.get('/', async (req, res) => {
  return res.send(
    `
    <html>
      <head>
        <script>
          window.__data = ${storeData};
        </script>
      </head>

      <body>
        <div id="root">${reactRoot}</div>
      </body>
      <script src=${clientScript}></script>
    </html>
    `,
  );
});

// eslint-disable-next-line
app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });
