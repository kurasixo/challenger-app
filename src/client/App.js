import React from 'react';

import Time from './Time';
import ClientRenderer from './ClientRenderer';

class App extends React.Component {
  generate = () => {
    console.log('generate');
  }

  render() {
    return (
      <>
        <ClientRenderer>
          <Time />
        </ClientRenderer>

        <button
          type="button"
          onClick={this.generate}
        >
          Generate
        </button>
      </>
    );
  }
}

export default App;
