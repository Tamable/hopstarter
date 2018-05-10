import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting'

const mapStateToProps = (state) => {
  let session = state.session
  let users = state.entities.users

  return {
    currentUser: users[session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
