import omitBy from 'lodash/omitBy';

export const doOpenWindow = (state, action, setActive = true) => {
  const processedWindow = {
    ...action.window,
    isVisible: true,
  };

  const activeName = setActive
    ? processedWindow.name
    : state.activeName;

  return {
    ...state,
    activeName,
    list: [
      ...state.list,
      processedWindow,
    ],
    map: {
      ...state.map,
      [action.window.name]: processedWindow,
    },
  };
};

export const doCloseWindow = (state, action) => {
  const predicate = ({ name }) => action.window.name !== name;

  const newWindowsMap = omitBy(state.map, predicate);
  const newWindowsList = state.list.filter(predicate);

  return {
    ...state,
    map: newWindowsMap,
    list: newWindowsList,
  };
};

export const doSetActiveWindow = (state, action) => {
  if (action.activeStatus) {
    return {
      ...state,
      activeName: action.window.name,
    };
  }

  return {
    ...state,
    activeName: null,
  };
};

export const doMinimizeWindow = (state, action) => {
  const currentWindow = {
    ...state.map[action.window.name],
    isVisible: false,
  };

  return doOpenWindow(state, { ...action, window: currentWindow }, false);
};


export const doRestoreWindow = (state, action) => {
  const currentWindow = {
    ...state.map[action.window.name],
    isVisible: true,
  };

  return doOpenWindow(state, { ...action, window: currentWindow });
};
