import React from 'react';
import { Route, Link } from 'react-router-dom';

import CategoryIndexEachContainer from './category_index_each_container';
import FeaturedCategoryContainer from './featured_category_container';

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchProjects();
    this.props.fetchCategories();
    this.props.fetchPledges();
  }

  render() {
    const projects = Object.values(this.props.projects);
    const categories = Object.values(this.props.categories);

    const categoryList = categories.map((category, i) => {
      return (
        <li key={category.id * i} category={category}><Link to={`/home/${category.id}/` }>{category.name}</Link></li>
        )
    });

    let totalBackers = 0;
    projects.forEach((project) => {
      totalBackers += project.backers.length
    });

    let fundedProjects = 0;
    projects.forEach((project) => {
      let pledgeAmountOfProject = 0;
      project.pledges.forEach((pledgeId) => {
        pledgeAmountOfProject += this.props.pledges[pledgeId].amount
      })
      if (pledgeAmountOfProject >= project.funding_goal) {
        fundedProjects.push(project)
      }
    })

    let totalPledgeAmount = 0;
    Object.values(this.props.pledges).forEach((pledge) => {
      totalPledgeAmount += pledge.amount
    })

    let today = new Date();
    const liveProjects = projects.filter((project) => {
      return new Date(project.end_date) >= today
    }).length;

    let sampleProjects = [];
    for (let i = 0; i < 6; i++) {
      let randomChoice = projects[Math.floor(Math.random() * projects.length)];
      sampleProjects.push(randomChoice)
    };
    let sampleProjectList = [];
    if (typeof(sampleProjects[0]) !== 'undefined') {
        sampleProjectList = sampleProjects.map((project, i) => {
        return (
          <li className="sample-project-list" key={project.id * i}>
            <div>
            <Link to={`/projects/${project.id}`}>
              <div className='sample-image'><img src={project.image_url} /></div>
              <div className='sample-info'>
              <div className="proj-description">{project.description.substring(0, 50)}...</div>
              <div className="proj-link">{project.title}</div>
              </div>
            </Link>
            </div>
          </li>
        )
      });
    }

    return (
      <div className="home-page">
        <section className='main-stats-bar'>
          <div>
            <span className="stats-title">{today.toDateString()}</span><br></br>
            <span className="stats">Bringing creative projects to life.</span>
          </div>
          <div>
            <span className="stats-title">TOTAL BACKERS</span><br></br>
            <span className="stats">{totalBackers}</span>
          </div>
          <div>
            <span className="stats-title">FUNDED PROJECTS</span><br></br>
            <span className="stats">{fundedProjects}</span>
          </div>
          <div>
            <span className="stats-title">LIVE PROJECTS</span><br></br>
            <span className="stats">{liveProjects}</span>
          </div>
        </section>

        <section className='category-menu'>
          <ul>{categoryList}</ul>
        </section>

        <Route path='/home/:id' component={CategoryIndexEachContainer} />
        <Route exact path='/home' component={FeaturedCategoryContainer} />

      <section className='sample-project-outer-container'>
        <div>
          <ul className="sample-projects-container">{sampleProjectList}</ul>
        </div>

      </section>

      <div className="footer">
        <ul className="category-list">{categoryList}</ul>
        <ul className="footer-icons">
          <li>
            <Link to="/home" className="logo">HOPSTARTER</Link>       <div>Inspired by Kickstarter</div>
            <div>Built with Ruby on Rails & React/Redux</div>
          </li>
          <li><a href="https://github.com/Tamable/hopstarter"><img src={window.staticImages.github} /></a></li>
          <li><a href="https://www.linkedin.com/in/tamae/"><img src={window.staticImages.linkedin} /></a></li>        </ul>
      </div>
    </div>
    )
  }
}

export default CategoryIndex;
