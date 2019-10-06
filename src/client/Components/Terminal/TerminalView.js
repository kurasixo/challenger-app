import React from 'react';

class TerminalView extends React.Component {
  render() {
    return (
      <div
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        className="terminal-wrapper"
        style={{ visibility: this.props.isCurrentWindowVisible ? 'visible' : 'hidden' }}
      >
        <div className="terminal-view">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TerminalView;
