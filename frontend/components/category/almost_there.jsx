import React from 'react';
import { Link } from 'react-router-dom';

const AlmostThere = ({ projectsOfCategory, featuredProject, pledges }) => {
  const sortedByFundingProgress = projectsOfCategory.filter((project) => {
      let pledgeAmountOfProject = 0;
      project.pledges.forEach((pledgeId) => {
        pledgeAmountOfProject += pledges[pledgeId].amount
      })
      let pledgePercent = Math.round((pledgeAmountOfProject / project.funding_goal) * 100);
      (project.funding_goal - project.pledgeAmountOfProject > 0) && (project.pledgeAmountOfProject / project.funding_goal > 0.5)
    }).sort((a, b) => {
      return (b.pledgeAmountOfProject / b.funding_goal) - (a.pledgeAmountOfProject / a.funding_goal)
    });

  let almostProjects = sortedByFundingProgress.slice(0, 4).map((project) => {
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
      <ul>{almostProjects}</ul>
    </section>
  )
}

export default AlmostThere;
