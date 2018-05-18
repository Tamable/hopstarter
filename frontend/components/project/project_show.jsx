import React from 'react';
import { Link } from 'react-router-dom';

import FlashMessageContainer from '../flash/flash_message_container';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchPledges();
    this.props.fetchRewards();
    this.props.fetchUsers();
    this.props.fetchCategories();
  }

  render() {
    let project = this.props.project;
    let creator = this.props.creator;

    let creatorName = "";
    let creatorProjectCount = 0;
    if (creator) {
      creatorName = creator.name;
      creatorProjectCount = creator.projectProposalIds.length
    }

    let category = this.props.category;
    let currentUser = this.props.currentUser;
    let rewards;
    if (project.rewards) {
      rewards = project.rewards.map((rewardId) => {
        let reward = this.props.rewards(rewardId)
        return (
          <li className="each-reward-container">
            <div>
              <div className="reward-amount">Pledge ${reward.pledge_amount} or more</div>
              <div className="reward-title">{reward.title}</div>
              <div className="reward-item">{reward.item}</div>
              <div className="reward-description">{reward.description}</div>
            </div>
            <div className="overlay">
              <div className="pledge-text"><Link to={`/projects/${project.id}/pledge`}>Back this project</Link></div>
            </div>
          </li>
        )
      })
    }

    let redirectLink = "";
    let buttonText = "";
    if (currentUser.supportProjectIds) {
      currentUser.supportProjectIds.find((supportProjectId) => {
        if (supportProjectId == project.id) {
          redirectLink = `/projects/${project.id}/pledge/edit`;
          buttonText = "Edit your pledge";
        }
      })
      redirectLink = `/projects/${project.id}/pledge`;
      buttonText = "Back this project";
    }

    let today = new Date();
    let endDate = new Date(project.end_date);
    let oneDay = 24*60*60*1000;
    let diffDays = Math.round(Math.abs((endDate.getTime() - today.getTime())/(oneDay)));
    let pledgeAmountOfProject = 0;
    if (project.pledges) {
      project.pledges.forEach((pledgeId) => {
        if (this.props.pledges[pledgeId]) {
          pledgeAmountOfProject += this.props.pledges[pledgeId].amount
        }
      })
    }
    let location = project.location ? project.location : "N/A"

    return (
      <div>
        <div className='show-outer-container'>
          <section className='show-top-section'>
            <section className='title-section'>
              <div className='title-sec-left'>
                <img src={creator.image_url}></img>
                <p className='creator-info'>{creatorName}<br></br>
                  <span>{creatorProjectCount} created</span>
                </p>
              </div>
              <div className='title-sec-right'>
                <h1>{project.title}</h1>
                <span>{project.description}</span>
                <FlashMessageContainer />
              </div>
            </section>
            <section className='image-section'>
              <div className='show-image-container'>
                <img className='image' src={project.image_url} />
              </div>
              <div className='stats-side'>
                <br></br><br></br>
                <div className='show-pledged'>${pledgeAmountOfProject}</div>
                <p>pledged of ${project.funding_goal} goal</p>
                <div>{project.backers ? project.backers.length : 0}</div>
                <p>backers</p>
                <div>{diffDays}</div>
                <p>days to go</p>
                <span className='pledge-link-button'><Link to={redirectLink}>{buttonText}</Link></span><br></br>
                <span className='small-print-underlined'>All or nothing.&nbsp;</span>
                <span className='small-print'>This project will only be funded if it reaches its goal by {project.end_date}.</span>
              </div>
          </section>
          <div className='category-location-bottom'>

            <div><img src={window.staticImages.favicon} />
            <p>Project We Love</p></div>
            <div><img src={window.staticImages.compass} />
            <Link to={`/categories/${category.id}`}>{category.name}</Link></div>
            <div><img src={window.staticImages.pin_map_icon} />
            <p>{location}</p></div>
          </div>
        </section>
        </div>
        <section>
          <div className="support">Support</div>
          <ul className="rewards-container">
            {rewards}
          </ul>
        </section>
      </div>
    )
  }
}

export default ProjectShow;
