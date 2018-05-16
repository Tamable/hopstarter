import React from 'react';
import { Link } from 'react-router-dom';

import BackedProjects from './backed_projects';
import CreatedProjects from './created_projects';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentPane: "createdActive" };
  };

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchCategories();
    this.props.fetchProjects();
  };

  switchPanes(pane) {
    this.setState({ currentPane: [pane] });
  };

  render() {
    const user = this.props.user;
    const pledges = this.props.user.pledges || [];
    const month = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    const joinedMonth = month[new Date(user.created_at).getMonth()];
    const joinedYear = new Date(user.created_at).getFullYear();

    const createdProjects = this.props.user.project_proposals;
    const backedProjects = this.props.user.supporting_projects;
    let selectedPane;
    if (this.state.currentPane == 'createdActive') {
      selectedPane = <CreatedProjects createdProjects={createdProjects} />
    } else if (this.state.currentPane == 'backedActive') {
      selectedPane = <BackedProjects backedProjects={backedProjects} pledges={pledges} />
    };

    const categories = Object.values(this.props.categoryObj);
    const categoryList = categories.map((category) => {
      return (
        <li key={category.id} category={category}><Link to={`/home/${category.id}/` }>{category.name}</Link></li>
        )
    });

    return(
      <div className="profile-container">
        <div className="profile-upper">
          <img className="profile-image" src={user.image_url} />
          <div className="user-info">
            <h1 className="user-name">{user.name}</h1>
            <span className="user-projects">
              Backed {backedProjects.length} projects · Joined {joinedMonth} {joinedYear}
            </span>
          </div>
        </div>
        <ul className="project-panes">
          <li onClick={ () => this.switchPanes('createdActive') }>
            My Projects</li>
          <li onClick={ () => this.switchPanes('backedActive') }>
            Backed Projects</li>
        </ul>
        {selectedPane}
        <div className="footer">
          <ul className="category-list">{categoryList}</ul>
          <ul className="footer-icons">
            <li>
              <Link to="/home" className="logo">HOPSTARTER</Link>       <div>Inspired by Kickstarter</div>
              <div>Built with Ruby on Rails & React/Redux</div>
            </li>
            <li><a href="https://github.com/Tamable/hopstarter"><img src={window.staticImages.github} /></a></li>
            <li><a href="https://www.linkedin.com/in/tamae/"><img src={window.staticImages.linkedin} /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserProfile;
