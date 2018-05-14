import React from 'react';
import { Route, Link } from 'react-router-dom';
import NewAndNoteworthy from './new_and_noteworthy';

const FeaturedCategory = (props) => {
  const allProjects = props.projects;
  const showCategoryId = props.showCategoryId;
  const allCreators = props.creators;
  const featuredCategory = props.categoryObj[showCategoryId];

  const projectsOfCategory = allProjects.filter((project) => project.category_id == showCategoryId);
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

  let categoryName = featuredCategory ? featuredCategory.name : ""

  // const sortedByCreatedAt = projectsOfCategory.sort((a, b) => {
  //   return new Date(b.created_at) - new Date(a.created_at)
  // });
  // let newProjects = sortedByCreatedAt.slice(0, 4).map((project) => {
  //   if (project !== featuredProject) {
  //     return (
  //       <div key={project.id} className="list-item">
  //         <li className="list-image">project image placeholder</li>
  //         <div><li className="list-title">{project.title}</li>
  //         <li className="list-pledge">{Math.round((project.amount_pledged / project.funding_goal) * 100)}% funded</li></div>
  //       </div>
  //     )
  //   }
  // });

  return (
    <div className="project-container">
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
        <NewAndNoteworthy projectsOfCategory={projectsOfCategory} featuredProject={featuredProject} />
        <Link className="view-all-bottom" to={`/categories/${showCategoryId}`}>VIEW ALL</Link>
      </div>
    </div>
    </div>
  )
}

export default FeaturedCategory;


// <section className="project-list-container">
//   <ul>{newProjects}</ul>
// </section>
