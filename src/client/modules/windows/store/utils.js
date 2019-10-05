import omitBy from 'lodash/omitBy';

export const doOpenWindow = (state, action) => {
  return {
    ...state,
    windowsMap: {
      ...state.windowsMap,
      [action.window.name]: action.window,
    },
  };
};

export const doCloseWindow = (state, action) => {
  const newWindowsMap = omitBy(state.windowsMap, ({ name }) => action.window.name !== name);

  return {
    ...state,
    windowsMap: newWindowsMap,
  };
};

export const doSetActiveWindow = (state, action) => {
  if (action.activeStatus) {
    return {
      ...state,
      activeWindowName: action.window.name,
    };
  }

  return {
    ...state,
    activeWindowName: null,
  };
};
