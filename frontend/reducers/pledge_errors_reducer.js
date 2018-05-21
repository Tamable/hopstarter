import { RECEIVE_PLEDGE_ERRORS, RECEIVE_PLEDGE } from '../actions/pledge_actions';

const pledgeErrorsReducer = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_PLEDGE_ERRORS:
      return action.errors;
    case RECEIVE_PLEDGE:
      return [];
    default:
      return state;
  }
}

export default pledgeErrorsReducer;
