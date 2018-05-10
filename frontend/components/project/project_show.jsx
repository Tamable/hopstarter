import React from 'react';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    let project = this.props.project
    let creator = this.props.creator
    let category = this.props.category
    return (
      <div>
        <div className='show-outer-container'>
          <section className='show-top-section'>
            <section className='title-section'>
              <h1>{project.title}</h1>
              <h1>{creator.name}</h1>
            <section className='image-section'>
              <div className='image-container'>
                <img className='image' src={project.image_url} />
              </div>
              <div className='stats-side'>
              </div>
              <div className='category-location-bottom'>
              </div>
          </section>
          </section>
        </section>
        </div>
      </div>
    )
  }
}

export default ProjectShow;
