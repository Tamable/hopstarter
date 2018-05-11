import { merge } from 'lodash';

import { RECEIVE_PLEDGE, REMOVE_PLEDGE } from '../actions/pledge_actions';

const pledgesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PLEDGE:
      return merge({}, state, { [action.project.id]: action.pledge });
    case REMOVE_PLEDGE:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default pledgesReducer;
