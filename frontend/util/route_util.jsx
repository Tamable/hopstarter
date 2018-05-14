import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => {

  return (
    <Route path={path} exact={exact} render={(props) => {
      return(
        !loggedIn ? (
          <Component { ...props} />
        ) : (
          <Redirect to='/' />
        )
      )}} />
  );
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
