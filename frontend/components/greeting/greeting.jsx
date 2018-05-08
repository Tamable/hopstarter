import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    const notLoggedIn = () => {
      return (
        <div>
          <Link to='/login'>Sign in</Link><br></br>
        </div>
      )
    }

    const loggedIn = () => {
      return (
        <div>
          <img src={currentUser.image_url} />
          <span>{currentUser.name}</span>
          <button onClick={logout}>Logout</button>
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
