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
    let now = new Date();
    let month = (now.getMonth() + 1);
    let day = now.getDate();
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    let today = now.getFullYear() + '-' + month + '-' + day;

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
            <input type='date' min={today} value={this.state.estimated_delivery} onChange={this.update('estimated_delivery')}></input>
            </div>
          </label>
          <label>
            <div className="field">Limited availability</div>
            <div className="input">
              <input type='number' min="0" value={this.state.backer_limit} onChange={this.update('backer_limit')}></input>
            </div>
          </label>

          <button className="reward-submit-button">{this.props.buttonText}</button>
        </form>
    </div>
    )
  };
};

export default withRouter(CreateRewardForm);
