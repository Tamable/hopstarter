import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProjectIndexContainer from './project/project_index_container';
import ProjectShowContainer from './project/project_show_container';
import CategoryShowContainer from './category/category_show_container';
import CreatePledgeFormContainer from './pledge/create_pledge_form_container';
import CategoryIndexContainer from './category/category_index_container';
import CategoryIndexEachContainer from './category/category_index_each_container';
import CreateProjectFormContainer from './project/create_project_form_container';
import EditProjectFormContainer from './project/edit_project_form_container';
import UserProfileContainer from './user/user_profile_container';
import EditRewardFormContainer from './reward/edit_reward_form_container';
import CreateRewardFormContainer from './reward/create_reward_form_container';
import ProjectPreviewContainer from './project/project_preview_container';

const App = () => {
  return (
    <div className="outer-container">
      <div className="nav-bar-container">
        <header className='nav-bar'>
          <div className="left-corner">
          <Link className="explore" to="/projects">Explore</Link><br></br>
          <Link to="/newproject/create">Start a project</Link>
          </div>
          <Link to="/home" className="logo">HOPSTARTER</Link>
          <GreetingContainer />
        </header>
      </div>

      <div className="form-container">
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </div>
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/projects/:id" component={ProjectShowContainer} />
      <Route exact path="/categories/:id" component={CategoryShowContainer} />
      <Route exact path="/projects/:id/pledge" component={CreatePledgeFormContainer} />
      <ProtectedRoute exact path="/newproject/create" component={CreateProjectFormContainer} />
      <ProtectedRoute exact path="/projects/:id/edit" component={EditProjectFormContainer} />
      <Route path="/home" component={CategoryIndexContainer} />
      <ProtectedRoute path="/users/:id" component={UserProfileContainer} />
      <Route exact path="/projects/:id/rewards" component={CreateRewardFormContainer} />
      <Route exact path="/projects/:id/preview" component={ProjectPreviewContainer} />
      <Route exact path="/projects/:id/rewards/edit" component={EditRewardFormContainer} />
    </div>
  )
}

export default App;
