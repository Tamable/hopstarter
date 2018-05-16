import * as ApiUtil from '../util/reward_api_util';

export const RECEIVE_REWARDS = 'RECEIVE_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';
export const RECEIVE_REWARD_ERRORS = 'RECEIVE_REWARD_ERRORS';

export const receiveRewards = (rewards) => {
  return {
    type: RECEIVE_REWARD,
    rewards: rewards,
  }
}

export const receiveReward = (reward) => {
  return {
    type: RECEIVE_REWARD,
    reward: reward,
  }
}

export const removeReward = (id) => {
  return {
    type: REMOVE_REWARD,
    id: id
  }
}

export const receiveRewardErrors = (errorArr) => {
  return {
    type: RECEIVE_REWARD_ERRORS,
    errors: errorArr
  }
}

export const fetchRewards = () => {
  return dispatch => {
    return ApiUtil.fetchReward().then((rewards) => {
      return dispatch(receiveReward(rewards));
      return reward;
    }, (err) => {
      return dispatch(receiveRewardErrors(err.responseJSON));
    })
  }
}

export const fetchReward = (id) => {
  return dispatch => {
    return ApiUtil.fetchReward(id).then((reward) => {
      return dispatch(receiveReward(reward));
      return reward;
    }, (err) => {
      return dispatch(receiveRewardErrors(err.responseJSON));
    })
  }
}

export const createReward = (reward) => {
  return dispatch => {
    return ApiUtil.createReward(reward).then((reward) => {
      return dispatch(receiveReward(reward));
      return reward;
    }, (err) => {
      return dispatch(receiveRewardErrors(err.responseJSON));
    })
  }
}

export const updateReward = (reward) => {
  return dispatch => {
    return ApiUtil.updateReward(reward).then((reward) => {
      return dispatch(receiveReward(reward));
      return reward;
    }, (err) => {
      return dispatch(receiveRewardErrors(err.responseJSON));
    })
  }
}

export const deleteReward = (id) => {
  return dispatch => {
    return ApiUtil.deleteReward(id).then(() => {
      return dispatch(removeReward(id))
    }, (err) => {
      return dispatch(receiveRewardErrors(err.responseJSON));
    })
  }
}
