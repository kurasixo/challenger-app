import * as AT from './actionTypes';
import * as utils from './utils';

const initialState = {
  activeWindowName: null,
  windowsMap: {},
};

const windowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.OPEN_WINDOW:
      return {
        ...state,
        ...utils.doOpenWindow(state, action),
      };

    case AT.CLOSE_WINDOW:
      return {
        ...state,
        ...utils.doCloseWindow(state, action),
      };

    case AT.SET_ACTIVE_WINDOW:
      return {
        ...state,
        ...utils.doSetActiveWindow(state, action),
      };


    default: return state;
  }
};

export default windowsReducer;
