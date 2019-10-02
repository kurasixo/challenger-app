import React from 'react';
import App from './App';

class Root extends React.Component {
  render() {
    return (
      <div>
        {this.props.version}
        <App />
      </div>
    );
  }
}

export default Root;
