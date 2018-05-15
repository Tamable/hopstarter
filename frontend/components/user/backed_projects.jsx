import React from 'react';
import { Link } from 'react-router-dom';

const BackedProjects = ({ backedProjects, pledges }) => {
  const backedProjectList = backedProjects.reverse().map((project) => {
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="list-item">
        <li className="list-image">project image placeholder</li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{Math.round((project.amount_pledged / project.funding_goal) * 100)}% funded</li></div>
        const pledge = pledges.find((pledge) => pledge.project_id == project.id)
        <div>supporting ${pledge.amount}</div>
        <div><Link to={`/pledge/${pledge.id}/edit`} className="edit-botton">Edit</Link></div>
      </Link>
    )
  });
  return (
    {backedProjectList}
  );
};

export default BackedProjects;
