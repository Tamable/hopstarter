import { connect } from 'react-redux';

import CategoryIndexEach from './category_index_each';

const mapStateToProps = (state, ownProps) => {
  const showCategoryId = ownProps.match.params.id;

  return {
    category: state.entities.categories[showCategoryId] || {},
    projects: state.entities.projects || {},
    users: state.entities.users || {},
    pledges: state.entities.pledges || {}
  }
}

export default connect(mapStateToProps)(CategoryIndexEach);
