import * as ApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (userInfo) => {
  return dispatch => {
    return ApiUtil.login(userInfo).then(user => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};

export const signup = (userInfo) => {
  return dispatch => {
    return ApiUtil.signup(userInfo).then(user => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};

export const logout = () => {
  return dispatch => {
    return ApiUtil.logout().then(user => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveSessionErrors = (errorArr) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errorArr
  };
};
