import React from 'react';
import { connect } from 'react-redux';

import Tray from '../Tray/Tray';
import AppWrapper from './AppWrapper';
import Distro from '../Distro/Distro';
import Terminal from '../Terminal/Terminal';
import DateTimeWidget from '../DateTimeWidget/DateTimeWidget';

import withFocus from '../../utils/withFocus';
import { windowTitles } from '../../utils/consts';
import ClientRenderer from '../../utils/ClientRenderer';
import { openWindow } from '../../modules/windows/store/actions';

const WithFocusTerminal = withFocus(windowTitles.TerminalWindow)(Terminal);

const startupApps = [
  {
    name: windowTitles.TerminalWindow,
    icon: '',
    meta: {
      opensOnMount: true,
    },
  },
];

@connect(null, { openWindow })
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
          <DateTimeWidget />
        </ClientRenderer>

        <Distro />
        <WithFocusTerminal />
      </AppWrapper>
    );
  }
}

export default App;
