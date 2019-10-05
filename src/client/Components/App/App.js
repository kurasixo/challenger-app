import React from 'react';

import Time from '../Time/Time';
import Tray from '../Tray/Tray';
import Distro from '../Distro/Distro';
import Terminal from '../Terminal/Terminal';
import AppWrapper from './AppWrapper';
import withFocus from '../../utils/withFocus';
import ClientRenderer from '../../utils/ClientRenderer';
import { windowTitles } from '../../utils/consts';

const WithFocusTerminal = withFocus(windowTitles.Terminal)(Terminal);

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Tray />
        <ClientRenderer>
          <Time />
        </ClientRenderer>

        <Distro />
        <WithFocusTerminal />
      </AppWrapper>
    );
  }
}

export default App;
