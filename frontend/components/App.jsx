import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProjectIndexContainer from './project/project_index_container';
import ProjectShowContainer from './project/project_show_container';

const App = () => {
  return (
    <div className="outer-container">
      <div className="nav-bar-container">
        <header className='nav-bar'>
          <div className="left-corner">
          <Link to="/projects">Explore</Link>
          </div>
          <Link to="/" className="logo">TEST</Link>
          <GreetingContainer />
        </header>
      </div>
      <div className="form-container">
      <AuthRoute exact path="/login" component={ LogInFormContainer } />
      <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
      </div>
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/projects/:id" component={ProjectShowContainer} />
    </div>
  )
}

export default App;
