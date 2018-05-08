import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const thunkMiddleware = (store) => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  } else {
    return next(action)
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState={}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, logger)
    )
  )
}

export default configureStore;
