import React from 'react';

const ProjectIndexItem = (props) => {
  let project = props.project

  return (
    <li>
      <img className='project-img' src={project.image_url} />
      <span>{project.title}</span>
      <span>{project.description}</span>
      <span>by {props.creator.name}</span>
      <span>{project.funding_goal}</span>
      <span>{project.end_date}</span>
      <span>{props.category.name}</span>
    </li>
  )
}

export default ProjectIndexItem;
