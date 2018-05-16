import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './project_errors_reducer';
import pledgeErrorsReducer from './pledge_errors_reducer';
import rewardErrorsReducer from './reward_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project: projectErrorsReducer,
  pledge: pledgeErrorsReducer,
  reward: rewardErrorsReducer
})

export default errorsReducer;
