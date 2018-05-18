import React from 'react';
import { Link } from 'react-router-dom';

const createdProjects = ({ createdProjects }) => {

  const createdProjectList = createdProjects.reverse().map((project) => {
    let amountPledged = project.amount_pledged ? project.amount_pledged : 0;
    let pledgePercent = Math.round((amountPledged / project.funding_goal) * 100)
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="profile-list-item">
        <li className="list-image"><img src={project.image_url} /></li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{pledgePercent}% funded</li></div>
        <div>created on {new Date(project.created_at).toDateString()}</div>
        <div><Link to={`/projects/${project.id}/edit`} className="edit-botton">Edit</Link></div>
      </Link>
    )
  });

  return (
    <section className="profile-project-container">
      <ul>{createdProjectList}</ul>
    </section>
  );
};

export default createdProjects;
