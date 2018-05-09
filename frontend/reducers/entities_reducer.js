import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  projects: projectsReducer,
  categories: categoriesReducer
});

export default entitiesReducer;
