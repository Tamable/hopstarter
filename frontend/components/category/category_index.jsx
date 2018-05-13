import React from 'react';
import { Route, Link } from 'react-router-dom';

import CategoryIndexEachContainer from './category_index_each_container';

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchCategory(newCategoryId);
    }
  }

  render() {
    const showCategoryId = this.props.showCategoryId;
    const allProjects = this.props.projects;
    const allCreators = this.props.creators;

    const categories = Object.values(this.props.categoryObj);
    const categoryList = categories.map((category) => {
      return (
        <li key={category.id} category={category}><Link to={`/${category.id}/` }>{category.name}</Link></li>
        )
    });

    let totalBackers = 0;
    allProjects.forEach((project) => {
      totalBackers += project.backer_count
    });

    const fundedProjects = allProjects.filter((project) => {
      return project.funding_goal <= project.amount_pledged
    }).length;

    let today = new Date();
    const liveProjects = allProjects.filter((project) => {
      return new Date(project.end_date) >= today
    }).length;


    const projectsOfCategory = allProjects.filter((project) => project.category_id == this.props.showCategoryId);
    const featuredProject = projectsOfCategory.sort((a, b) => {
      return b.amount_pledged - a.amount_pledged })[0];
      const featuredCategory = this.props.categoryObj[showCategoryId];
      let featuredTitle = "";
      let featuredCreator = "";
      let pledgePercent = "";
      let featuredId = "";
      if (featuredProject) {
        featuredTitle = featuredProject.title;
        featuredCreator = this.props.creators[featuredProject.creator_id].name.toUpperCase();
        pledgePercent = Math.round((featuredProject.amount_pledged / featuredProject.funding_goal) * 100);
        featuredId = featuredProject.id;
      };

      let categoryName = featuredCategory ? featuredCategory.name : ""

      const sortedByCreatedAt = projectsOfCategory.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      });
      let newProjects = sortedByCreatedAt.slice(0, 4).map((project) => {
        if (project !== featuredProject) {
          return (
            <div key={project.id} className="list-item">
              <li className="list-image">project image placeholder</li>
              <div><li className="list-title">{project.title}</li>
              <li className="list-pledge">{Math.round((project.amount_pledged / project.funding_goal) * 100)}% funded</li></div>
            </div>
          )
        }
      });

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

        <div className="featured-cat-container">
          <span className="featured-category">{categoryName}</span>
          <Link className="top-view-all" to={`/categories/${showCategoryId}`}>VIEW ALL →</Link>
        </div>

        <div className="featured-proj">
          <div className="featured-left">
            <p className="feature-title">FEATURED PROJECT</p>
            <div className="proj-image-container"><img /></div>
            <Link to={`/projects/${featuredId}`} className="project-info-container">
              <h1 className="featured-title">{featuredTitle}</h1>
              <p className="featured-creator">BY {featuredCreator}</p>
              <p className="featured-pledge">{pledgePercent}% FUNDED</p>
            </Link>
          </div>

          <div className="featured-right">
            <ul className="headings">
              <li>NEW & NOTEWORTHY</li>
              <li>ALMOST THERE</li>
              <li>POPULAR</li>
            </ul>
            <section className="project-list-container">
              <ul>{newProjects}</ul>
            </section>
            <Link className="view-all-bottom" to={`/categories/${showCategoryId}`}>VIEW ALL</Link>
          </div>
        </div>

      <Route exact path='/:id' component={CategoryIndexEachContainer} />

      <div className="footer">
        <ul className="category-list">{categoryList}</ul>
        <ul className="footer-icons">
          <li>
            <Link to="/" className="logo">HOPSTARTER</Link>       <div>Inspired by Kickstarter</div>
            <div>Built with Ruby on Rails & React/Redux</div>
          </li>
          <li><Link to="https://github.com/Tamable/hopstarter"><img src={window.staticImages.github} /></Link></li>
          <li><img src={window.staticImages.linkedin} /></li>
        </ul>

      </div>
    </div>
    )
  }
}

export default CategoryIndex;
