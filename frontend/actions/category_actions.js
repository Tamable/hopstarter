import * as ApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategory = (payload) => {
  return {
    type: RECEIVE_CATEGORY,
    category: payload.category,
    projects: payload.projects,
    creators: payload.creators
  }
}

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const fetchCategory = (id) => {
  return dispatch => {
    return ApiUtil.fetchCategory(id).then((payload) => {
      return dispatch(receiveCategory(payload))
    })
  }
}

export const fetchCategories = () => {
  return dispatch => {
    return ApiUtil.fetchCategories().then((categories) => {
      return dispatch(receiveCategories(categories))
    })
  }
}
