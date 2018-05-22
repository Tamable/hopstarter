import React from 'react';
import { Link } from 'react-router-dom';

const BackedProjects = ({ projects, pledges, user }) => {
  let userBackedProjects = [];
  user.supportProjectIds.map((projectId) => {
    userBackedProjects.push(projects[projectId])
  })
  const backedProjectList = userBackedProjects.reverse().map((project) => {
    let pledgeAmountOfProject = 0;
    let userPledgeAmount = "";
    if (project.pledges) {
      project.pledges.forEach((pledgeId) => {
        if (pledges) {
          pledgeAmountOfProject += pledges[pledgeId].amount;
          if (pledges[pledgeId].supporter_id == user.id) {
            userPledgeAmount = pledges[pledgeId].amount
          }
        }
      })
    }
    let pledgePercent = Math.round((pledgeAmountOfProject / project.funding_goal) * 100);

    return (
      <Link to={`/projects/${project.id}`} key={project.id} className="profile-list-item">
        <li className="list-image"><img src={project.image_url} /></li>
        <div><li className="list-title">{project.title}</li>
        <li className="list-pledge">{pledgePercent}% funded</li></div>
        <div>supporting ${userPledgeAmount}</div>
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
