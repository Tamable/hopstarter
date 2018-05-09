import React from 'react';
import ProjectIndexItemContainer from './project_index_item_container';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.projects.map(project => {
            return <ProjectIndexItemContainer key={project.id} project={project} />
          })}
        </ul>
      </div>
    )
  }
}

export default ProjectIndex;
