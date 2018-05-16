import { ADD_FLASH_MESSAGE, DELETE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';
let shortid = require('shortid');
import { findIndex } from 'lodash/findIndex';

export const flashMessagesReducer = (state=[], action ) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_MESSAGE:
      let newState = [];
      return newState;
    default:
      return state;
  }
}

export default flashMessagesReducer;
