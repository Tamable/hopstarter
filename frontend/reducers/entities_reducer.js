import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import categoriesReducer from './categories_reducer';
import pledgesReducer from './pledges_reducer';
import rewardsReducer from './rewards_reducer';
import flashMessagesReducer from './flash_messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  categories: categoriesReducer,
  pledges: pledgesReducer,
  rewards: rewardsReducer,
  flashMessages: flashMessagesReducer
});

export default entitiesReducer;
