import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { createPledge } from '../../actions/pledge_actions';

const mapStateToProps = (state, ownProps) => {

  let project = state.entities.projects[ownProps.match.params.id];
  let creator = {};
  let category = {};

  if (project) {
    creator = state.entities.users[project.creator_id],
    category = state.entities.categories[project.category_id]
  } else {
    project = {};
  }

  return {
    project,
    creator,
    category,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);