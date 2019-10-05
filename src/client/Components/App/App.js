import React from 'react';

import Time from '../Time/Time';
import Distro from '../Distro/Distro';
import Terminal from '../Terminal/Terminal';
import AppWrapper from './AppWrapper';
import ClientRenderer from '../../utils/ClientRenderer';

class App extends React.Component {
  generate = () => {
    console.log('generate');
  }

  render() {
    return (
      <AppWrapper>
        <ClientRenderer>
          <Time />
        </ClientRenderer>

        <Distro />
        <Terminal />
      </AppWrapper>
    );
  }
}

export default App;
