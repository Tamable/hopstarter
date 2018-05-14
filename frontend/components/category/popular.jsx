import React from 'react';
import { Link } from 'react-router-dom';

const Popular = ({ projectsOfCategory, featuredProject }) => {
  const sortedByBackerCount = projectsOfCategory.sort((a, b) => {
    return b.backer_count - a.backer_count
  });
  let popularProjects = sortedByBackerCount.slice(0, 4).map((project) => {
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="list-item">
        <li className="list-image">project image placeholder</li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{Math.round((project.amount_pledged / project.funding_goal) * 100)}% funded</li></div>
      </Link>
    )
  });

  return (
    <section className="project-list-container">
      <ul>{popularProjects}</ul>
    </section>
  )
}

export default Popular;
