import { RECEIVE_PROJECT_ERRORS, RECEIVE_PROJECT } from '../actions/project_actions';

const projectErrorsReducer = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECT:
      return [];
    default:
      return state;
  }
}

export default projectErrorsReducer;
