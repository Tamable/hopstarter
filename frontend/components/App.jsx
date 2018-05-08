import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Test</h1>
        <GreetingContainer />
      </header>

      <Route path='/login' component={LogInFormContainer} />
      <Route path='/signup' component={SignUpFormContainer} />
    </div>
  )
}

export default App;
