import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const user = this.props.user;
    const backedProjects = this.props.user.supporting_projects
    const joinedMonth = new Date(this.props.user.created_at).getMonth();
    const joinedYear = new Date(this.props.user.created_at).getFullYear();

    return(
      <div>
        <img className='profile-img' src={user.image_url} />
        <h1>{user.name}</h1>
        <span>Backed {backedProjects.length} projects</span>
        <span>Joined {joinedMonth} {joinedYear}</span>
      </div>
    )
  }
}

export default UserProfile;
