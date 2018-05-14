import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const user = this.props.user;

    return(
      <h1>{user.name}</h1>
    )
  }
}

export default UserProfile;
