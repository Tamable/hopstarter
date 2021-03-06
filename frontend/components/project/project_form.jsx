import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.addRewardRedirect = this.addRewardRedirect.bind(this);
    this.editRewardRedirect = this.editRewardRedirect.bind(this);
    this.delete = this.delete.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.noRewardRedirect = this.noRewardRedirect.bind(this);
  };

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  };

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () =>
      this.setState({ imageFile: file, imageUrl: fileReader.result });


    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  addRewardRedirect(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[creator_id]', this.state.creator_id);
    formData.append('project[category_id]', this.state.category_id);
    formData.append('project[description]', this.state.description);
    formData.append('project[funding_goal]', this.state.funding_goal);
    formData.append('project[end_date]', this.state.end_date);
    formData.append('project[image]', this.state.imageFile);
    this.props.action(formData).then((payload) => {
      this.props.history.replace(`/projects/${payload.project.id}/rewards`);
    })
  };

  editRewardRedirect(e) {
    e.preventDefault();
    this.props.action(this.state).then((payload) => {
      this.props.history.replace(`/projects/${payload.project.id}/rewards/edit`);
    })
  };

  noRewardRedirect(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[creator_id]', this.state.creator_id);
    formData.append('project[category_id]', this.state.category_id);
    formData.append('project[description]', this.state.description);
    formData.append('project[funding_goal]', this.state.funding_goal);
    formData.append('project[end_date]', this.state.end_date);
    formData.append('project[image]', this.state.imageFile);
    this.props.action(formData).then((payload) => {
      this.props.history.replace(`/projects/${payload.project.id}/preview`)
    })
  };

  delete(e) {
    e.preventDefault();
    this.props.deleteProject(this.props.project.id).then(() => {
      this.props.history.replace(`/users/${this.props.currentUserId}`)
    })
  };

  errors() {
    if (this.props.erros) {
      return (
        this.props.errors.map((error) => {
          return (<li key={error}>{error}</li>);
        })
      )
    }
  };

  render() {
    const categoryList = this.props.categories.map((category) => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      )
    });

    const locations = ["Manhattan, NY", "New York, NY", "Brooklyn, NY", "Queens, NY", "Bronx, NY", "Rochester, NY", "Albany, NY", "Buffalo, NY", "Syracuse, NY", "Ithaca, NY", "Seattle, WA"]
    const locationList = locations.map((location, i) => {
      return (
        <option key={i}>{location}</option>
      )
    });

    return (
      <div className="project-form">
        <ul className="editor-menu">
          <li><Link to={`/users/${this.props.currentUserId}`}>Exit editor</Link></li>
          <li className="selected-banner">Basics</li>
          <li>Rewards</li>
          <li>Preview</li>
        </ul>

        <div className="form-top-text">
        <h1>Let's get started.</h1>
        <p>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</p>
        </div>
        <ul className="error">
          { this.errors() }
        </ul>
        <form>
          <label>
            <div className="field">Project title</div>
            <div className="input">
            <input type="text" value={this.state.title} onChange={this.update('title')}></input>
            </div>
          </label>
          <label>
            <div className="field">Short blurb</div>
            <div className="input">
            <input type="text" value={this.state.description} onChange={this.update('description')}></input>
            </div>
          </label>
          <label>
            <div className="field">Category</div>
            <div className="input">
            <select value={this.state.category_id} onChange={this.update('category_id')}>
              <option defaultValue>Select a category</option>
              {categoryList}
            </select>
            </div>
          </label>
          <label>
            <div className="field">Project location</div>
            <div className="input">
            <select value={this.state.location} onChange={this.update('location')}>
              <option defaultValue>Select a location</option>
              {locationList}
            </select>
            </div>
          </label>
          <label>
            <div className="field">Project end date</div>
            <div className="input">
            <input type='date' value={this.state.end_date} onChange={this.update('end_date')}></input>
            </div>
          </label>
          <label>
            <div className="field">Funding goal</div>
            <div className="input">
            <input type="text" placeholder="$" value={this.state.funding_goal} onChange={this.update('funding_goal')}></input>
            </div>
          </label>
          <label>
            <div className='field'>Image</div>
            <div className='input'>
              <input type='file' onChange={this.updateFile}></input>
            </div>
          </label>
          <img src={this.state.imageUrl} />

          <div className="proceed-buttons">
          <button onClick={this.addRewardRedirect}>{this.props.addRewardButton}</button>
          <button onClick={this.editRewardRedirect}>{this.props.editRewardButton}</button>
          <button onClick={this.noRewardRedirect}>Skip rewards and go to preview</button>
          </div>
        </form>
        <button className="delete-button" onClick={this.delete}>{this.props.deleteButton}</button>

      </div>
    )
  }
}

export default withRouter(ProjectForm);
