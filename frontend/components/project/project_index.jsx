import React from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItemContainer from './project_index_item_container';

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchPledges();
    this.props.fetchUsers();
  }

  searchProjects(query) {
    query = query.toLowerCase();
    if (query == '') {
      this.setState({
        projects: [],
       })
    } else {
      let searchedProjects = this.props.projects.filter((project) => {
        return project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query)
      })
      this.setState({ projects: searchedProjects })
    }
  }

  handleSearch(e) {
    this.searchProjects(e.target.value);
  }

  render() {
    const categoryList = this.props.categories.map((category) => {
      return (
        <li key={category.id} category={category}><Link to={`/home/${category.id}/` }>{category.name}</Link></li>
        )
    });

    const searchedProjects = this.state.projects.map((project) => {
      return (
        <li key={project.id}><Link to={`/projects/${project.id}`}>{project.title}</Link></li>
      )
    })

    return (
    <div>
      <div className="search-box-container">
        <div className='search-input'>
          <input type='text' defaultValue='Search by project title or description...' onKeyUp={this.handleSearch.bind(this)} />
        </div>
        <div className='search-result'>
          <ul>{searchedProjects}</ul>
        </div>
      </div>
      <div className='project-index-container'>
        <ul>
          {this.props.projects.reverse().map(project => {
            return <ProjectIndexItemContainer key={project.id} project={project} pledges={this.props.pledges} creator={this.props.users[project.creator_id]} />
          })}
        </ul>
      </div>
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

export default ProjectIndex;
