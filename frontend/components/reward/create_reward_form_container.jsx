import { connect } from 'react-redux';

import CreateRewardForm from './create_reward_form';
import { createReward, fetchRewards } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    reward: {
      project_id: ownProps.match.params.id,
      pledge_amount: '',
      title: '',
      description: '',
      item_name: '',
      digital_item: false,
      estimated_delivery: '',
      limited_availability: false,
      backer_limit: ''
    },
    buttonText: "Create and preview",
    currentUserId: state.session.id,
    errors: state.errors.reward
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (reward) => dispatch(createReward(reward)),
    fetchRewards: () => dispatch(fetchRewards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRewardForm);
