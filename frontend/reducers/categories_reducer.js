import { merge } from 'lodash';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.categories;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.category.id]: action.category });
    case RECEIVE_CATEGORY:
      return merge({}, state, { [action.category.id]: action.category });
    default:
      return state;
  }
}

export default categoriesReducer;
