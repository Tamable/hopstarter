import React from 'react';
import { Link } from 'react-router-dom';

const createdProjects = ({ createdProjects }) => {

  const createdProjectList = createdProjects.reverse().map((project) => {
    let pledgePercent;
    pledgePercent = project.amount_pledged ? Math.round((project.amount_pledged / project.funding_goal) * 100) : 0
    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="profile-list-item">
        <li className="list-image">project image placeholder</li>
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
