import React from 'react';
import { connect } from 'react-redux';

import RewardForm from './reward_form';
import { fetchProject } from '../../actions/project_actions';
import { updateReward, deleteReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    rewardsOfProject: state.entities.projects[ownProps.match.params.id].rewards,
    project: state.entities.projects[ownProps.match.params.id],
    buttonText: "Update and preview",
    currentUserId: state.session.id,
    errors: state.errors.reward
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    action: (reward) => dispatch(updateReward(reward)),
    deleteReward: (id) => dispatch(deleteReward(id))
  }
};

class EditRewardForm extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    const { action, rewardsOfProject, buttonText, project, deleteReward } = this.props;

    return (
      <div>
        <RewardForm action={action} rewardsOfProject={rewardsOfProject} deleteReward={deleteReward} buttonText={buttonText} project={project}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRewardForm);
