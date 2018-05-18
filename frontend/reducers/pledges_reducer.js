import { merge } from 'lodash';

import { RECEIVE_PLEDGES, RECEIVE_PLEDGE, REMOVE_PLEDGE } from '../actions/pledge_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const pledgesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PLEDGES:
      return merge({}, state, action.pledges)
    case RECEIVE_PLEDGE:
      return merge({}, state, { [action.pledge.id]: action.pledge });
    case REMOVE_PLEDGE:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default pledgesReducer;
