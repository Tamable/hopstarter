import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
  return (
    <div className="outer-container">
      <div className="nav-bar-container">
        <header className='nav-bar'>
          <div className="left-corner">
          <span>Explore</span>
          <span>Start a project</span>
          </div>
          <div className="logo">TEST</div>
          <GreetingContainer />
        </header>
      </div>
      <div className="form-background">
        <div className="form-container">
        <AuthRoute exact path="/login" component={ LogInFormContainer } />
        <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
        </div>
      </div>
    </div>
  )
}

export default App;
