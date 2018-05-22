import { merge } from 'lodash';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_REWARDS } from '../actions/reward_actions';
import { RECEIVE_PLEDGES } from '../actions/pledge_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const projectsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.project.id]: action.project });
    case REMOVE_PROJECT:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_PLEDGES:
      return merge({}, state, action.projects)
    case RECEIVE_REWARDS:
      return merge({}, state, action.projects)
    case RECEIVE_CATEGORY:
      return merge({}, state, action.category.projects)
    case RECEIVE_USER:
      return merge({}, state, action.user.projects)
    default:
      return state;
  }
}

export default projectsReducer;
