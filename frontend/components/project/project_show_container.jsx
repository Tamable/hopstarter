import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchRewards } from '../../actions/reward_actions';
import { fetchPledges } from '../../actions/pledge_actions';
import { fetchCategories } from '../../actions/category_actions';
import { addFlashMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {

  let project = state.entities.projects[ownProps.match.params.id];
  let creator = {};
  let category = {};

  if (project) {
    creator = state.entities.users[project.creator_id];
    category = state.entities.categories[project.category_id];
  } else {
    project = {};
  }

  const currentUser = state.entities.users[state.session.id]

  return {
    project,
    creator,
    category,
    currentUser,
    pledges: state.entities.pledges,
    rewards: state.entities.rewards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    addFlashMessage: () => dispatch(addFlashMessage()),
    fetchPledges: () => dispatch(fetchPledges()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchRewards: () => dispatch(fetchRewards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
