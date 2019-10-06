import React from 'react';
import { connect } from 'react-redux';

import TrayPad from './TrayPad';

@connect((state) => {
  return {
    windows: state.windows.list,
    activeWindowName: state.windows.activeName,
  };
})
class Tray extends React.Component {
  renderTrayPad = (window) => {
    const { activeWindowName } = this.props;

    return (
      <TrayPad
        key={window.name}
        window={window}
        isActive={window.name === activeWindowName}
      />
    );
  }

  render() {
    const { windows } = this.props;

    return (
      <div style={{ display: 'flex', backgroundColor: 'black' }}>
        {windows.map(this.renderTrayPad)}
      </div>
    );
  }
}

export default Tray;
