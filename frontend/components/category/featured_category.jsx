import React from 'react';
import { Route, Link } from 'react-router-dom';
import NewAndNoteworthy from './new_and_noteworthy';
import AlmostThere from './almost_there';
import Popular from './popular';

class FeaturedCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: 'newActive'
    };
  }

  switchPanes(pane) {
    this.setState({ show: [pane] })
  }

  render() {
    const users = this.props.users;
      let categoryIdArr = Object.keys(this.props.categories);
      let showCategoryId = categoryIdArr[Math.floor(Math.random() * categoryIdArr.length)]
      const featuredCategory = this.props.categories[showCategoryId];

    let projectsOfCategory = [];
    if (featuredCategory) {
      featuredCategory.projects.forEach((projectId) => {
        projectsOfCategory.push(this.props.projects[projectId])
      })
    }

    const featuredProject = projectsOfCategory.sort((a, b) => {
      return b.pledges.length - a.pledges.length })[0];
      let featuredTitle = "";
      let featuredCreator = "";
      let pledgePercent = "";
      let featuredId = "";
      let image = "";
      if (featuredProject && users) {
        featuredTitle = featuredProject.title;
        featuredCreator = users[featuredProject.creator_id].name.toUpperCase();
        let pledgeAmountOfProject = 0;
        featuredProject.pledges.forEach((pledgeId) => {
          if (this.props.pledges[pledgeId]) {
            pledgeAmountOfProject += this.props.pledges[pledgeId].amount
          }
        })
        pledgePercent = Math.round((pledgeAmountOfProject / featuredProject.funding_goal) * 100);
        featuredId = featuredProject.id;
        image = featuredProject.image_url;
      }

    let categoryName = featuredCategory ? featuredCategory.name : ""

    let selectedPane;
      if (this.state.show == 'newActive') {
        selectedPane = <NewAndNoteworthy projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} pledges={this.props.pledges} />
      } else if (this.state.show == 'almostActive') {
        selectedPane = <AlmostThere projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} pledges={this.props.pledges} />
      } else if (this.state.show == 'popularActive') {
        selectedPane = <Popular projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} pledges={this.props.pledges} />
      }

    return (
      <div className="project-container">
        <div className="featured-cat-container">
          <span className="featured-category">{categoryName}</span>
          <Link className="top-view-all" to={`/categories/${showCategoryId}`}>VIEW ALL →</Link>
        </div>

        <div className="featured-proj">
          <div className="featured-left">
            <p className="feature-title">FEATURED PROJECT</p>
            <div className="proj-image-container"><img src={image} /></div>
            <Link to={`/projects/${featuredId}`} className="project-info-container">
              <h1 className="featured-title">{featuredTitle}</h1>
              <p className="featured-creator">BY {featuredCreator}</p>
              <p className="featured-pledge">{pledgePercent}% FUNDED</p>
            </Link>
          </div>

          <div className="featured-right">
            <ul className="headings">
              <li onClick={ () => this.switchPanes('newActive') }>NEW & NOTEWORTHY</li>
              <li onClick={ () => this.switchPanes('almostActive') }>ALMOST THERE</li>
              <li onClick={ () => this.switchPanes('popularActive') }>POPULAR</li>
            </ul>
            {selectedPane}
            <Link className="view-all-bottom" to={`/categories/${showCategoryId}`}>VIEW ALL</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedCategory;
