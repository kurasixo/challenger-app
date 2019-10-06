import React from 'react';

class Window extends React.Component {
  componentDidMount() {
    this.props.onFocus();
  }

  render() {
    return this.props.children;
  }
}

export default Window;
