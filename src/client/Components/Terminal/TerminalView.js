import React from 'react';

const termStyle = {
  margin: 0,
  marginTop: '20px',
  marginRight: '20px',
  border: '2px solid grey',
  color: 'white',
  borderRadius: '.25rem',
  boxShadow: '1px 1px 11px rgba(0, 0, 0, 0.22)',
  height: '500px',
  maxWidth: '600px',
  minWidth: '350px',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
};

class TerminalView extends React.Component {
  render() {
    return (
      <div
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        style={{ alignSelf: 'flex-end', position: 'absolute', top: '5em' }}
      >
        <div style={termStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TerminalView;
