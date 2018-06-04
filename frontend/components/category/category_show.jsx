import React from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from '../project/project_index_item';

class CategoryShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategory(this.props.match.params.id);
    this.props.fetchPledges();
  }

  render() {
    let categoryId = Number(this.props.match.params.id);
    return (
      <div className='project-index-container'>
        <ul>
          {Object.values(this.props.projects).reverse().filter((project) => {
            return project.category_id == categoryId
          }).map((project) => {
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
