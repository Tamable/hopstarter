import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    let project = this.props.project;
    let creator = this.props.creator;
    let category = this.props.category;

    let today = new Date();
    let endDate = new Date(project.end_date);
    let oneDay = 24*60*60*1000;
    let diffDays = Math.round(Math.abs((endDate.getTime() - today.getTime())/(oneDay)));
    let amountPledged = project.amount_pledged ? project.amount_pledged : 0;

    return (
      <div>
        <div className='show-outer-container'>
          <section className='show-top-section'>
            <section className='title-section'>
              <div className='title-sec-left'>
                <img src={creator.image_url}></img>
                <p className='creator-info'>{creator.name}<br></br>
                  <span>{creator.project_count} created</span>
                </p>
              </div>
              <div className='title-sec-right'>
                <h1>{project.title}</h1>
                <span>{project.description}</span>
              </div>
            </section>
            <section className='image-section'>
              <div className='show-image-container'>
                <img className='image' src={project.image_url} />
              </div>
              <div className='stats-side'>
                <br></br><br></br>
                <div className='show-pledged'>${amountPledged}</div>
                <p>pledged of ${project.funding_goal} goal</p>
                <div>{project.backer_count}</div>
                <p>backers</p>
                <div>{diffDays}</div>
                <p>days to go</p>
                <span className='pledge-link-button'><Link to={`/projects/${project.id}/pledge`}>Back this project</Link></span><br></br>
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
            <p>City, State</p></div>
          </div>
        </section>
        </div>
      </div>
    )
  }
}

export default ProjectShow;
