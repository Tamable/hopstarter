import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    const notLoggedIn = () => {
      return (
        <div>
          <Link to='/login' className='signin-link'>Sign in</Link><br></br>
        </div>
      )
    }

    const loggedIn = () => {
      return (
        <div className='right-corner'>
          <img className='profile-img' src={currentUser.image_url} />
          <div className='dropdown-content'>
            <li><Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link></li>
            <li onClick={logout}>Log out</li>
          </div>
        </div>
      )
    }
    if (currentUser) {
      return loggedIn();
    } else {
      return notLoggedIn();
    }
  }
}

export default Greeting;
