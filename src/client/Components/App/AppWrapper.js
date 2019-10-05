import React from 'react';

class AppWrapper extends React.Component {
  render() {
    return (
      <div
        style={{
          userSelect: 'none',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Fira Code, monospace',
          backgroundColor: 'grey',
          width: '100%',
          height: '100%',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AppWrapper;
