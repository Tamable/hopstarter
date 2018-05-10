import React from 'react';

const ProjectIndexItem = (props) => {
  let project = props.project;

  let today = new Date();
  let endDate = new Date(project.end_date);
  let oneDay = 24*60*60*1000;
  let diffDays = Math.round(Math.abs((endDate.getTime() - today.getTime())/(oneDay)));
  let amountPledged = project.amount_pledged ? project.amount_pledged : 0;
  let pledgePercent = Math.round((project.amount_pledged / project.funding_goal) * 100)

  return (
      <div>
      <div className='image-container'><img className='project-img' src={project.image_url} />
      <div className="collection">Project We Love</div>
      </div>
      <li className='project-index-item'>
      <div className='title-name'>
      <span className='project-title'>{project.title}</span><br></br>
      <span className='project-creator'>by {props.creator.name}</span>
      </div>
      <div className='pledge-progress-container'>
        <div className='pledge-progress-bar-outer'>
          <div className="percentage-${pledgePercent}"></div>
        </div>
      </div>
      <div className='stats-box'>
      <span className='project-pledge'>${amountPledged} pledged</span><br></br>
      <span>{pledgePercent}% funded</span><br></br>
      <span>{diffDays} days to go</span><br></br><br></br>
      <span className='project-category'>{props.category.name}</span>
      </div>
    </li>
    </div>
  )
}

export default ProjectIndexItem;
