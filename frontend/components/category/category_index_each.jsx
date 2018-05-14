import React from 'react';
import { Route, Link } from 'react-router-dom';
import NewAndNoteworthy from './new_and_noteworthy';

const CategoryIndexEach = (props) => {
  const allProjects = props.projects;
  const allCreators = props.creators;
  const categoryName = props.categoryObj.name;

  const projectsOfCategory = allProjects.filter((project) =>  project.category_id == props.categoryObj.id )
  const featuredProject = projectsOfCategory.sort((a, b) => {
    return b.amount_pledged - a.amount_pledged })[0];

  let featuredTitle = "";
  let featuredCreator = "";
  let pledgePercent = "";
  let featuredId = "";
  if (featuredProject) {
    featuredTitle = featuredProject.title;
    featuredCreator = allCreators[featuredProject.creator_id].name.toUpperCase();
    pledgePercent = Math.round((featuredProject.amount_pledged / featuredProject.funding_goal) * 100);
    featuredId = featuredProject.id;
  };

  return (
    <div className="project-container">
      <div className="featured-cat-container">
        <span className="featured-category">{categoryName}</span>
        <Link className="top-view-all" to={`/categories/${props.categoryObj.id}`}>VIEW ALL →</Link>
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
          <NewAndNoteworthy projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} />
          <Link className="view-all-bottom" to={`/categories/${props.categoryObj.id}`}>VIEW ALL</Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryIndexEach;
