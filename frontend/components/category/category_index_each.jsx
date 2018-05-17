import React from 'react';
import { Route, Link } from 'react-router-dom';

import NewAndNoteworthy from './new_and_noteworthy';
import AlmostThere from './almost_there';
import Popular from './popular';

class CategoryIndexEach extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newActive: true,
      almostActive: false,
      popularActive: false
    };
  }

  switchPanes(pane) {
    this.setState({
      newActive: false,
      almostActive: false,
      popularActive: false
    });
    this.setState({ [pane]: true });
  }

  render() {
    const allProjects = this.props.projects;
    const allCreators = this.props.creators;
    const categoryName = this.props.categoryObj.name;

    const projectsOfCategory = allProjects.filter((project) =>  project.category_id == this.props.categoryObj.id )
    const featuredProject = projectsOfCategory.sort((a, b) => {
      return b.amount_pledged - a.amount_pledged })[0];

      let featuredTitle = "";
      let featuredCreator = "";
      let pledgePercent = "";
      let featuredId = "";
      let image = "";
      if (featuredProject) {
        featuredTitle = featuredProject.title;
        featuredCreator = allCreators[featuredProject.creator_id].name.toUpperCase();
        pledgePercent = Math.round((featuredProject.amount_pledged / featuredProject.funding_goal) * 100);
        featuredId = featuredProject.id;
        image = featuredProject.image_url
      }

      let selectedPane;
      if (this.state.newActive) {
        selectedPane = <NewAndNoteworthy projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} />
      } else if (this.state.almostActive) {
        selectedPane = <AlmostThere projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} />
      } else if (this.state.popularActive) {
        selectedPane = <Popular projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} />
      }

    return (
      <div className="project-container">
        <div className="featured-cat-container">
          <span className="featured-category">{categoryName}</span>
          <Link className="top-view-all" to={`/categories/${this.props.categoryObj.id}`}>VIEW ALL →</Link>
        </div>

        <div className="featured-proj">
          <div className="featured-left">
            <p className="feature-title">FEATURED PROJECT</p>
            <div className="proj-image-container"><img src={image}/></div>
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
            <Link className="view-all-bottom" to={`/categories/${this.props.categoryObj.id}`}>VIEW ALL</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryIndexEach;
