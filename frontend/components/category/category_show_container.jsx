import { connect } from 'react-redux';

import { fetchCategory } from '../../actions/category_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {

  return {
    category: state.entities.categories[ownProps.match.params.id],
    creators: state.entities.users,
    projects: Object.values(state.entities.projects)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);
