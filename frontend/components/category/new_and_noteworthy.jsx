import React from 'react';
import { Link } from 'react-router-dom';

const NewAndNoteworthy = ({ projectsOfCategory, featuredProject, pledges }) => {
  const sortedByCreatedAt = projectsOfCategory.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  });

  let newProjects = sortedByCreatedAt.slice(0, 4).map((project) => {

    if (project !== featuredProject) {
      let pledgeAmountOfProject = 0;
      project.pledges.forEach((pledgeId) => {
        if (pledges[pledgeId]) {
          pledgeAmountOfProject += pledges[pledgeId].amount
        }
      })
      let pledgePercent = Math.round((pledgeAmountOfProject / project.funding_goal) * 100);
      return (
        <Link to={`/projects/${project.id}`} key={project.id} className="list-item">
          <li className="list-image"><img src={project.image_url} /></li>
          <div><li className="list-title">{project.title}</li>
          <li className="list-pledge">{pledgePercent}% funded</li></div>
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
