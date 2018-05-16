import { connect } from 'react-redux';

import ProjectPreview from './project_preview';
import { fetchProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.id];
  return {
    project,
    category: state.entities.categories[project.category_id],
    currentUserId: state.session.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPreview);
