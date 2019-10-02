import 'babel-polyfill';

import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';

import Root from './src/Root';
import createStore from './createStore';

const PORT = 3000;
const app = express();

app.use(express.static('./build', { index: false }));

app.get('/', async (req, res) => {
  const store = createStore({});

  // TODO: move to seperate component
  const reactRoot = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Root />
    </Provider>,
  );

  // TODO: get rid of html webpack plugin
  const indexFile = path.resolve('./build/index.html');
  await fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading index file');
    }

    // TODO: move to serialize
    const storeData = JSON.stringify(store.getState());
    console.log(storeData);

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `
          <script>
            window.__data = ${storeData};
          </script>
          <div id="root">${reactRoot}</div>
        `,
      ),
    );
  });
});

// eslint-disable-next-line
app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });
