import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CreateRewardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.reward;
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((reward) => {
      this.props.history.replace(`/projects/${this.props.reward.project_id}/preview`)
    });
  };

  render() {

    return (
      <div className="project-form">
        <ul className="editor-menu">
          <li><Link to={`/users/${this.props.currentUserId}`}>Exit editor</Link></li>
          <li>Basics</li>
          <li className="selected-banner">Rewards</li>
          <li>Preview</li>
        </ul>

        <div className="form-top-text">
        <h1>Set your rewards.</h1>
        <p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="field">Title</div>
            <div className="input">
              <input type='text' value={this.state.title} onChange={this.update('title')}></input>
            </div>
          </label>
          <label>
            <div className="field">Pledge amount</div>
            <div className="input">
              <input type='text' value={this.state.pledge_amount} onChange={this.update('pledge_amount')}></input>
            </div>
          </label>
          <label>
            <div className="field">Description</div>
            <div className="input">
            <input type="text" value={this.state.description} onChange={this.update('description')}></input>
            </div>
          </label>
          <label>
            <div className="field">Item</div>
            <div className="input">
            <input type="text" value={this.state.item_name} onChange={this.update('item_name')}></input>
            </div>
          </label>
          <label>
            <div className="field">Estimated delivery</div>
            <div className="input">
            <input type='date' value={this.state.estimated_delivery} onChange={this.update('estimated_delivery')}></input>
            </div>
          </label>
          <label className="collapse" htmlFor="_limited">
            <div className="field">Limited Availability</div>
          </label>
          <input id="_limited" type="checkbox" />
          <div><input type="number" value={this.state.backer_limit}></input></div>
          <button className="reward-submit-button">{this.props.buttonText}</button>
        </form>
    </div>
    )
  };
};

export default withRouter(CreateRewardForm);
