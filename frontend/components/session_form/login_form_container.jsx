import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    buttonText: 'Log me in!',
    errors: state.errors.session,
    link: <Link to="/signup">Sign up!</Link>,
    linkText: 'New to HopStarter?',
    header: 'Log in',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (userInfo) => dispatch(login(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
