import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import RewardItem from './reward_item';

class RewardForm extends React.Component {

  render() {
    const { action, rewards, buttonText, deleteReward, currentUserId, project, errors } = this.props;

    let rewardsOfProject = [];
    let rewardList;
    if (rewards) {
      project.rewards.map((rewardId) => {
        rewardsOfProject.push(rewards[rewardId])
      })
      rewardList = rewardsOfProject.map((reward) => {
        return (
          <ul>
            <li key={reward.id}><RewardItem reward={reward} action={action} deleteReward={deleteReward} buttonText={buttonText} project={project} errors={errors}/></li>
          </ul>
        )
      })
    } else {
      rewardList = "There is currently no reward offers for this project."
    }

    return (
      <div className="project-form">
        <ul className="editor-menu">
          <li><Link to={`/users/${this.props.currentUserId}`}>Exit editor</Link></li>
          <li>Basics</li>
          <li className="selected-banner">Rewards</li>
          <li>Preview</li>
        </ul>

        <div className="form-top-text">
        <h1>Edit your rewards.</h1>
        <p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</p>
        </div>

        {rewardList}
      </div>
    )
  }
}

export default RewardForm;
