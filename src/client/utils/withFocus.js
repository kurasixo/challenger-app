import React from 'react';
import { connect } from 'react-redux';

import { setActiveWindow } from '../modules/windows/store/actions';

const withFocus = (name) => (Component) => {
  @connect(null, { setActiveWindow })
  class WithFocus extends React.Component {
    onFocus = () => {
      this.props.setActiveWindow({ name }, true);
    }

    onBlur = () => {
      this.props.setActiveWindow({ name }, false);
    }

    render() {
      return (
        <Component
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      );
    }
  }

  return WithFocus;
};

export default withFocus;
