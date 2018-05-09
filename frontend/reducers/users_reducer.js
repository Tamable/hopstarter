import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

const usersReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_PROJECTS:
      return action.creators;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.creator.id]: action.creator });
    default:
      return state;
  }
}

export default usersReducer;
