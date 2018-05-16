import React from 'react';
import { Link } from 'react-router-dom';

const BackedProjects = ({ backedProjects, pledges }) => {
  const backedProjectList = backedProjects.reverse().map((project) => {
    let pledge = pledges.find((pledge) => pledge.project_id == project.id);
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="profile-list-item">
        <li className="list-image">project image placeholder</li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{Math.round((project.amount_pledged / project.funding_goal) * 100)}% funded</li></div>
        <div>supporting ${pledge.amount}</div>
        <div><Link to={`/pledge/${pledge.id}/edit`} className="edit-botton">Edit</Link></div>
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
