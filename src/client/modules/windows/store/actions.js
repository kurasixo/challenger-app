import * as AT from './actionTypes';

export const setActiveWindow = (windowObj, activeStatus) => {
  return { type: AT.SET_ACTIVE_WINDOW, activeStatus, window: windowObj };
};

export const openWindow = (windowObj) => {
  return { type: AT.OPEN_WINDOW, window: windowObj };
};

export const closeWindow = (windowObj) => {
  return { type: AT.CLOSE_WINDOW, window: windowObj };
};
