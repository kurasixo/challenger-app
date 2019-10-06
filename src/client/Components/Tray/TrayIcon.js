import React from 'react';

const TrayIcon = ({ icon }) => {
  return (
    <div className="tray-icon">
      {icon.name}
    </div>
  );
};

export default TrayIcon;
