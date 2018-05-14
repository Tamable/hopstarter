import React from 'react';
import { Link } from 'react-router-dom';

const AlmostThere = ({ projectsOfCategory, featuredProject }) => {
  const sortedByFundingProgress = projectsOfCategory.filter((project) =>
    (project.funding_goal - project.amount_pledged > 0) && (project.amount_pledged / project.funding_goal > 0.75)
  ).sort((a, b) => {
    return (b.amount_pledged / b.funding_goal) - (a.amount_pledged / a.funding_goal)
  });

  let almostProjects = sortedByFundingProgress.slice(0, 4).map((project) => {
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
      <ul>{almostProjects}</ul>
    </section>
  )
}

export default AlmostThere;
