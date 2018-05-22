import React from 'react';
import { Link } from 'react-router-dom';

const Popular = ({ projectsOfCategory, featuredProject, pledges }) => {
  const sortedByBackerCount = projectsOfCategory.sort((a, b) => {
    return b.backers.length - a.backers.length
  });
  let popularProjects = sortedByBackerCount.slice(0, 4).map((project) => {
    let pledgeAmountOfProject = 0;
    project.pledges.forEach((pledgeId) => {
      pledgeAmountOfProject += pledges[pledgeId].amount
    })
    let pledgePercent = Math.round((pledgeAmountOfProject / project.funding_goal) * 100);

    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="list-item">
        <li className="list-image"><img src={project.image_url} /></li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{pledgePercent}% funded</li></div>
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
