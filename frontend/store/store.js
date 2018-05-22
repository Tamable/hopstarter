import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root_reducer';

const thunkMiddleware = (store) => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  } else {
    return next(action)
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState={}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
}

export default configureStore;
