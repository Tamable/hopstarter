import React from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from '../project/project_index_item';

class CategoryShow extends React.Component {

  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
    this.props.fetchProjects();
    this.props.fetchPledges();
  }

  render() {
    return (
      <div className='project-index-container'>
        <ul>
          {Object.values(this.props.projects).reverse().map((project) => {
            let creator = this.props.users[project.creator_id];
            return (
              <div key={project.id}>
                <ProjectIndexItem project={project} creator={creator} category={this.props.category} pledges={this.props.pledges}/>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CategoryShow;
