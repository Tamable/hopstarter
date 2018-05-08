import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = (props) => {
  let Component = props.component;
  let path = props.path;
  let loggedIn = props.loggedIn;
  let exact = props.exact;

  // let componentToRender;
  // if (!loggedIn) {
  //   componentToRender = <Component {...props} />;
  // } else {
  //   componentToRender = <Redirect to="/" />;
  // }
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

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
