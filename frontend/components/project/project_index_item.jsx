import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = (props) => {
  const project = props.project;

  let today = new Date();
  let endDate = new Date(project.end_date);
  let oneDay = 24*60*60*1000;
  let diffDays = Math.round(Math.abs((endDate.getTime() - today.getTime())/(oneDay)));

  let pledgeAmountOfProject = 0;
    project.pledges.forEach((pledgeId) => {
      pledgeAmountOfProject += props.pledges[pledgeId].amount
    })
  let pledgePercent = Math.round((pledgeAmountOfProject / project.funding_goal) * 100);

  let creatorName = ""
  if (props.creator) {
    creatorName = props.creator.name
  }

  return (
    <div>
      <Link to={`/projects/${project.id}`} className='index-outer-container'>
        <div className='image-container'>
          <img src={project.image_url} />
        <div className="collection">Project We Love</div>
        </div>
        <li className='project-index-item' key={project.id}>
          <div className='title-name'>
          <span className='project-title'>{project.title}</span><br></br>
          <span className='project-creator'>by {creatorName}</span>
          </div>
          <div className='pledge-progress-container'>
            <div className='pledge-progress-bar-outer'>
              <div className="percentage-${pledgePercent}"></div>
            </div>
          </div>
          <div className='stats-box'>
          <span className='project-pledge'>${pledgeAmountOfProject} pledged</span><br></br>
          <span>{pledgePercent}% funded</span><br></br>
          <span>{diffDays} days to go</span><br></br><br></br>
          <Link to={`/categories/${props.category.id}`} className='project-category'>{props.category.name}
          </Link>
          </div>
        </li>
      </Link>
    </div>
  )
}

export default ProjectIndexItem;
