import { connect } from 'react-redux';

import ProjectPreview from './project_preview';
import { fetchProject } from '../../actions/project_actions';
import { fetchRewards } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.id];
  return {
    project,
    category: state.entities.categories[project.category_id],
    currentUserId: state.session.id,
    rewards: state.entities.rewards,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchRewards: () => dispatch(fetchRewards()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPreview);
