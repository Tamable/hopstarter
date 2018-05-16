export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message: message
  }
}

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id: id
  }
}
