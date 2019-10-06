import React from 'react';
import cs from 'classnames';

const TrayPad = ({ window, isActive }) => {
  return (
    <div className={cs('tray-pad', { 'tray-pad__is-active': isActive })}>
      {window.name}
    </div>
  );
};

export default TrayPad;
