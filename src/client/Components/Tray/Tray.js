import React from 'react';
import { connect } from 'react-redux';

@connect((state) => {
  return {
    activeWindowName: state.windows.activeWindowName,
  };
})
class Tray extends React.Component {
  render() {
    const { activeWindowName } = this.props;

    return (
      <div
        style={{
          backgroundColor: 'black',
          height: '25px',
        }}
      >
        {activeWindowName}
      </div>
    );
  }
}

export default Tray;
