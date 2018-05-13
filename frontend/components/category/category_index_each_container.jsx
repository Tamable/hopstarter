import { connect } from 'react-redux';

import CategoryIndexEach from './category_index_each';

const mapStateToProps = (state, ownProps) => {
  const showCategoryId = ownProps.match.params.id;
  // const projects = Object.values(state.entities.projects).filter((project) => { project.category_id == showCategoryId });
  const category = state.entities.categories[showCategoryId];

  return {
    category,
    projects: Object.values(state.entities.projects),
    showCategoryId,
    creators: state.entities.users
  }
}

export default connect(mapStateToProps)(CategoryIndexEach);
