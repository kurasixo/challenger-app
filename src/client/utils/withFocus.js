import React from 'react';
import { connect } from 'react-redux';

import { setActiveWindow } from '../modules/windows/store/actions';

const getIsCurrentWindowVisible = (state, name) => {
  const currentWindow = state.windows.map[name];
  return currentWindow && currentWindow.isVisible;
};

const withFocus = (name) => (Component) => {
  @connect((state) => {
    return {
      isCurrentWindowVisible: getIsCurrentWindowVisible(state, name),
    };
  }, {
    setActiveWindow,
  })
  class WithFocus extends React.Component {
    componentRef = React.createRef()

    onFocus = (evnt) => {
      this.props.setActiveWindow(name, true);

      if (this.componentRef.current) {
        this.componentRef.current.focus();
      }
    }

    onBlur = () => {
      this.props.setActiveWindow(name, false);
    }

    render() {
      const { isCurrentWindowVisible } = this.props;

      return (
        <Component
          name={name}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          withFocusPropRef={this.componentRef}
          isCurrentWindowVisible={isCurrentWindowVisible}
        />
      );
    }
  }

  return WithFocus;
};

export default withFocus;
