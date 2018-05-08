import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    buttonText: 'Create an account',
    errors: state.errors.session,
    link: <Link to="/login">Log in</Link>,
    linkText: 'Have an account?   '
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (userInfo) => dispatch(signup(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);