import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  }
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user
  }
};

export const fetchUsers = () => {
  return dispatch => {
    return ApiUtil.fetchUsers().then((users) => {
      return dispatch(receiveUsers(users));
      return users;
    })
  }
}

export const fetchUser = (id) => {
  return dispatch => {
    return ApiUtil.fetchUser(id).then((user) => {
      return dispatch(receiveUser(user));
      return user;
    })
  }
};
