import * as AT from './actionTypes';

export const authenticateUser = () => {
  return { type: AT.AUTHENTICATE_USER };
};

export const login = () => {
  return { type: AT.LOGIN };
};

export const logout = () => {
  return { type: AT.LOGOUT };
};
