import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_PLEDGES } from '../actions/pledge_actions';

const usersReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_PROJECTS:
      return merge({}, state, action.users);
    case RECEIVE_PROJECT:
      return merge({}, state, action.user);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_PLEDGES:
      return merge({}, state, action.users)
    case RECEIVE_USERS:
      return merge({}, state, action.users)
    default:
      return state;
  }
}

export default usersReducer;
