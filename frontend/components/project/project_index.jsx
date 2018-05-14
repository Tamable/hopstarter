import React from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItemContainer from './project_index_item_container';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
  }

  render() {
    const categoryList = this.props.categories.map((category) => {
      return (
        <li key={category.id} category={category}><Link to={`/home/${category.id}/` }>{category.name}</Link></li>
        )
    });

    return (
    <div>
      <div className='project-index-container'>
        <ul>
          {this.props.projects.map(project => {
            return <ProjectIndexItemContainer key={project.id} project={project} />
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
