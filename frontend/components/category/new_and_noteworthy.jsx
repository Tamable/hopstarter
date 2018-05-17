import React from 'react';
import { Link } from 'react-router-dom';

const NewAndNoteworthy = ({ projectsOfCategory, featuredProject }) => {
  const sortedByCreatedAt = projectsOfCategory.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  });
  let newProjects = sortedByCreatedAt.slice(0, 4).map((project) => {
    if (project !== featuredProject) {
      return (
        <Link to={`/projects/${project.id}`} key={project.id} className="list-item">
          <li className="list-image"><img src={project.image_url} /></li>
          <div><li className="list-title">{project.title}</li>
          <li className="list-pledge">{Math.round((project.amount_pledged / project.funding_goal) * 100)}% funded</li></div>
        </Link>
      )
    }
  });

  return (
    <section className="project-list-container">
      <ul>{newProjects}</ul>
    </section>
  )
}

export default NewAndNoteworthy;
