import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexEach = (props) => {
  const showCategoryId = props.showCategoryId;
  const projects = props.projects.filter((project) => { project.category_id == showCategoryId })
  const featuredProject = projects.sort((a, b) => {
    return b.amount_pledged - a.amount_pledged })[0];

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

  const categoryName = props.category.name;

  const sortedByCreatedAt = projects.sort((a, b) => {
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
    <div>
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
    </div>
  )
}

export default CategoryIndexEach;
