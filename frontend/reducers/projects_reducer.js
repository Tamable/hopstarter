import { merge } from 'lodash';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_PLEDGE, REMOVE_PLEDGE } from '../actions/pledge_actions';

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
    case RECEIVE_CATEGORY:
      return action.projects;
    default:
      return state;
  }
}

export default projectsReducer;
