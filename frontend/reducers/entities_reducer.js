import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import categoriesReducer from './categories_reducer';
import pledgesReducer from './pledges_reducer';
import rewardsReducer from './rewards_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  categories: categoriesReducer,
  pledges: pledgesReducer,
  rewards: rewardsReducer
});

export default entitiesReducer;
