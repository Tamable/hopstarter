import React from 'react';
import { connect } from 'react-redux';

import RewardForm from './reward_form';
import { fetchProject } from '../../actions/project_actions';
import { fetchRewards, updateReward, deleteReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    project: state.entities.projects[ownProps.match.params.id],
    buttonText: "Update and preview",
    currentUserId: state.session.id,
    errors: state.errors.reward,
    rewards: state.entities.rewards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchRewards: () => dispatch(fetchRewards()),
    action: (reward) => dispatch(updateReward(reward)),
    deleteReward: (id) => dispatch(deleteReward(id))
  }
};

class EditRewardForm extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchRewards();
  }

  render() {
    const { action, rewards, buttonText, project, deleteReward } = this.props;
    return (
      <div>
        <RewardForm action={action} rewards={rewards} deleteReward={deleteReward} buttonText={buttonText} project={project}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRewardForm);
