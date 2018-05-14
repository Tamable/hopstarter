import React from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from '../project/project_index_item';

class CategoryShow extends React.Component {

  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
  }

  render() {
    let category = this.props.category;
    let projects = this.props.projects;
    let creators = this.props.creators;

    return (
      <div className='project-index-container'>
        <ul>
          {projects.reverse().map((project) => {
            let creator = creators[project.creator_id];
            return (
              <div key={project.id}>
                <ProjectIndexItem project={project} creator={creator} category={category}/>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CategoryShow;
