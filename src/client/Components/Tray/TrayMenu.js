import React from 'react';

import TrayMenuIcon from './TrayMenuIcon';
import TrayMenuItem from './TrayMenuItem';
import TrayMenuDelimiter from './TrayMenuDelimiter';

const trayMenuItems = [{
  name: 'Web Browser',
  isApp: true,
  icon: '',
}, {
  name: 2,
  isDelimiter: true,
}, {
  name: 'Preferences',
  isApp: true,
  icon: '',
}, {
  name: 'Games',
  isApp: true,
  icon: '',
}, {
  name: 'System',
  isApp: true,
  icon: '',
}, {
  name: 1,
  isDelimiter: true,
}, {
  name: 'Help',
  isApp: false,
  icon: '',
}, {
  name: 'About',
  isApp: false,
  icon: '',
}, {
  name: 'Logout',
  isApp: false,
  icon: '',
}];

class TrayMenu extends React.Component {
  state = { isMenuOpened: false };

  onClick = () => {
    this.setState((prevState) => {
      return {
        isMenuOpened: !prevState.isMenuOpened,
      };
    });
  }

  getOnClickItem = () => {
    return (event) => {
      event.stopPropagation();
    };
  }

  renderTrayMenuItem = (trayMenuItem) => {
    if (trayMenuItem.isDelimiter) {
      return (
        <TrayMenuDelimiter key={trayMenuItem.name} />
      );
    }

    const onClick = this.getOnClickItem();
    return (
      <TrayMenuItem
        onClick={onClick}
        key={trayMenuItem.name}
        trayMenuItem={trayMenuItem}
      />
    );
  }

  render() {
    const { isMenuOpened } = this.state;

    return (
      <div
        className="tray-menu"
        onClick={this.onClick}
      >
        <TrayMenuIcon />

        {isMenuOpened && (
          <div className="tray-menu-items-wrapper">
            {trayMenuItems.map(this.renderTrayMenuItem)}
          </div>
        )}
      </div>
    );
  }
}

export default TrayMenu;
