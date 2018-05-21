import React from 'react';
import { Link } from 'react-router-dom';

const createdProjects = ({ projects, pledges, user }) => {
  let userCreatedProjects = [];
  user.projectProposalIds.map((projectId) => {
    userCreatedProjects.push(projects[projectId])
  })
  let pledgeAmountOfProject = 0;
  let pledgePercent = 0;
  let projectId = "";
  let projectImage = "";
  let projectTitle = "";
  let projectCreatedAt = "";
  let projectFundingGoal = "";
  const createdProjectList = userCreatedProjects.reverse().map((project, i) => {
    if (project) {
      project.pledges.forEach((pledgeId) => {
        if (pledges) {
          pledgeAmountOfProject += pledges[pledgeId].amount
          pledgePercent = Math.round((pledgeAmountOfProject / project.funding_goal) * 100);
        }
      })
      projectId = project.id;
      projectImage = project.image_url;
      projectTitle = project.title;
      projectCreatedAt = project.created_at;
      projectFundingGoal = project.funding_goal;
    }

    return (
      <Link to={`/projects/${projectId}`} key={projectId + i + projectFundingGoal} className="profile-list-item">
        <li className="list-image"><img src={projectImage} /></li>
        <div><li className="list-title">{projectTitle}</li>
        <li className="list-pledge">{pledgePercent}% funded</li></div>
        <div>created on {new Date(projectCreatedAt).toDateString()}</div>
        <div><Link to={`/projects/${projectId}/edit`} className="edit-botton">Edit</Link></div>
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
