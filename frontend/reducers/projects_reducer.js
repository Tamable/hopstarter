import { merge } from 'lodash';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.project.id]: action.project });
    case REMOVE_PROJECT:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default projectsReducer;
