import React from 'react';
import { connect } from 'react-redux';

import Time from '../Time/Time';
import Tray from '../Tray/Tray';
import Distro from '../Distro/Distro';
import Terminal from '../Terminal/Terminal';
import AppWrapper from './AppWrapper';

import withFocus from '../../utils/withFocus';
import { windowTitles } from '../../utils/consts';
import ClientRenderer from '../../utils/ClientRenderer';
import { openWindow, setActiveWindow } from '../../modules/windows/store/actions';

const WithFocusTerminal = withFocus(windowTitles.TerminalWindow)(Terminal);

const startupApps = [
  {
    name: windowTitles.TerminalWindow,
    meta: {
      opensOnMount: true,
    },
  },
];

@connect(null, { openWindow, setActiveWindow })
class App extends React.Component {
  componentDidMount() {
    startupApps.forEach(this.openApp);
  }

  openApp = (windowObj) => {
    this.props.openWindow(windowObj);
  }

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
