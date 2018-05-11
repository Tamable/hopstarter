import ApiUtilFetchCategory from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategory = (payload) => {
  return {
    type: RECEIVE_CATEGORY,
    category: payload.category,
    projects: payload.projects,
    creators: payload.creators
  }
}

export const fetchCategory = (id) => {
  return dispatch => {
    return ApiUtilFetchCategory(id).then((payload) => {
      return dispatch(receiveCategory(payload))
    })
  }
}
