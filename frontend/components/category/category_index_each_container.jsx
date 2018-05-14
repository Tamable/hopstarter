import { connect } from 'react-redux';

import CategoryIndexEach from './category_index_each';

const mapStateToProps = (state, ownProps) => {
  const showCategoryId = ownProps.match.params.id;

  return {
    categoryObj: state.entities.categories[showCategoryId] || {},
    projects: Object.values(state.entities.projects) || [],
    creators: state.entities.users
  }
}

export default connect(mapStateToProps)(CategoryIndexEach);
