import React from 'react';
import { Link } from 'react-router-dom';

const BackedProjects = ({ backedProjects, pledges }) => {
  const backedProjectList = backedProjects.reverse().map((project) => {
    let pledgePercent;
    pledgePercent = project.amount_pledged ? Math.round((project.amount_pledged / project.funding_goal) * 100) : 0

    let pledge = pledges.find((pledge) => pledge.project_id == project.id);
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="profile-list-item">
        <li className="list-image">project image placeholder</li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{pledgePercent}% funded</li></div>
        <div>supporting ${pledge.amount}</div>
        <div><Link to={`/projects/${project.id}/pledge/edit`} className="edit-botton">Edit</Link></div>
      </Link>
    )
  });
  return (
    <section className="profile-project-container">
      <ul>{backedProjectList}</ul>
    </section>
  );
};

export default BackedProjects;
