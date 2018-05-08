import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { login, logout } from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

// TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login
//TESTING END

  ReactDOM.render(<Root store={store} />, root);
})
