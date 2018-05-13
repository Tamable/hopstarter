import React from 'react';

class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {

    const categoryList = this.props.categories.map((category) => {
      return (
        <option key={category.id}>{category.name}</option>
      )
    });

    const locations = ["Manhattan, NY", "New York, NY", "Brooklyn, NY", "Queens, NY", "Bronx, NY", "Rochester, NY", "Albany, NY", "Buffalo, NY", "Syracuse, NY", "Ithaca, NY", "Seattle, WA"]
    const locationList = locations.map((location, i) => {
      return (
        <option key={i}>{location}</option>
      )
    });

    return (
      <div>
        <ul>
          <li>Exit editor</li>
          <li>Basics</li>
          <li>Rewards</li>
          <li>Preview</li>
        </ul>

        <h1>Let's get started.</h1>
        <p>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</p>
        <form onSubmit={this.handleSubmit}>
          <label>Project title
          <input type="text" value={this.state.title} onChange={this.update('title')}></input>
          </label>
          <label>Shortblurb
          <input type="text" value={this.state.description} onChange={this.update('description')}></input>
          </label>
          <label>Category
            <select>
              <option defaultValue>Select a category</option>
              {categoryList}
            </select>
          </label>
          <label>Project location
            <select>
              <option defaultValue>Select a location</option>
              {locationList}
            </select>
          </label>
          <label>Project end date
            <input type='date'></input>
          </label>
          <label>Funding goal
            <input type="text" value={this.state.funding_goal} onChange={this.update('funding_goal')}></input>
          </label>
          <button>{this.props.buttonText}</button>
        </form>

      </div>
    )
  }
}

export default ProjectForm;
