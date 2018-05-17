import { RECEIVE_REWARD_ERRORS, RECEIVE_REWARD } from '../actions/reward_actions';

const rewardErrorsReducer = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_REWARD_ERRORS:
      return [...action.errors];
    case RECEIVE_REWARD:
      return [];
    default:
      return state;
  }
}

export default rewardErrorsReducer;
