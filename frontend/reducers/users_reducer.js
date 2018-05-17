import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_PROJECTS:
      return merge({}, state, action.users);
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CATEGORY:
      return merge({}, state, action.creators);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
}

export default usersReducer;
