import React from 'react';
import { Route, Link } from 'react-router-dom';

import CategoryIndexEachContainer from './category_index_each_container';
import FeaturedCategoryContainer from './featured_category_container';

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const allProjects = this.props.projects;
    const categories = Object.values(this.props.categoryObj);
    const categoryList = categories.map((category) => {
      return (
        <li key={category.id} category={category}><Link to={`/home/${category.id}/` }>{category.name}</Link></li>
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
