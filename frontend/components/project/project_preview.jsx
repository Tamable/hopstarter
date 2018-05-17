import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectPreview extends React.Component {

  constructor(props) {
    super(props);

  };

  componentDidMount() {
    this.props.fetchProject(this.props.project.id);
  };

  render() {
    let project = this.props.project;
    let category = this.props.category;

    let today = new Date();
    let endDate = new Date(project.end_date);
    let oneDay = 24*60*60*1000;
    let diffDays = Math.round(Math.abs((endDate.getTime() - today.getTime())/(oneDay)));
    let amountPledged = project.amount_pledged ? project.amount_pledged : 0;
    let location = project.location ? project.location : "N/A"

    const rewards = project.rewards.map((reward) => {
      return (
        <li className="each-reward-container">
          <div>
          <div className="reward-amount">Pledge ${reward.pledge_amount} or more</div>
          <div className="reward-title"> {reward.title}</div>
          <div className="reward-item">{reward.item}</div>
          <div className="reward-description">{reward.description}</div>
          </div>
          <div className="overlay">
            <div className="pledge-text">Back this project</div>
          </div>
        </li>
      )
    })

    return (
      <div>
        <div className="project-form">
        <ul className="editor-menu">
          <li><Link to={`/users/${this.props.currentUserId}`}>Exit editor</Link></li>
          <li>Basics</li>
          <li>Rewards</li>
          <li className="selected-banner">Preview</li>
        </ul>

        <div className="form-top-text">
        <h1>Good to go?</h1>
        <p>When you are ready, let's launch this project. You can come back later and tweak the details. Good luck!</p>
        </div>
        </div>

        <div className='show-outer-container'>
          <section className='show-top-section'>
            <section className='title-section'>
              <div className='title-sec-right'>
                <h1>{project.title}</h1>
                <span>{project.description}</span>
              </div>
            </section>
            <section className='image-section'>
              <div className='show-image-container'>
                <img src={project.image_url} />
              </div>
              <div className='stats-side'>
                <br></br><br></br>
                <div className='show-pledged'>${amountPledged}</div>
                <p>pledged of ${project.funding_goal} goal</p>
                <div>{project.backer_count}</div>
                <p>backers</p>
                <div>{diffDays}</div>
                <p>days to go</p>
                <div className="buttons">
                <div className="preview-save"><Link to={`/projects/${project.id}`}>
                  Save and go live!</Link></div>
                <div className="preview-return"><Link to={`/projects/${project.id}/edit`}>Return to editor</Link></div>
                </div>
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
        <section className="rewards-outer-container">
          <div className="support">Support</div>
          <ul className="rewards-container">
            {rewards}
          </ul>
        </section>
        </div>
      </div>
    )
  }
}

export default ProjectPreview;
