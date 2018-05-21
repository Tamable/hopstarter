import { merge } from 'lodash';

import { RECEIVE_REWARDS, RECEIVE_REWARD, REMOVE_REWARD } from '../actions/reward_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const rewardsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_REWARDS:
      return merge({}, state, action.rewards);
    case RECEIVE_REWARD:
      return merge({}, state, { [action.reward.id]: action.reward });
    case REMOVE_REWARD:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default rewardsReducer;
