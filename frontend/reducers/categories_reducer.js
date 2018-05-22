import { merge } from 'lodash';
import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_CATEGORY, RECEIVE_CATEGORIES } from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CATEGORY:
      return merge({}, state, { [action.category.id]: action.category });
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories);
    default:
      return state;
    case RECEIVE_PROJECTS:
      return merge({}, state, action.categories);
  }
}

export default categoriesReducer;
