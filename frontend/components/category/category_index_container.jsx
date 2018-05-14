import { connect } from 'react-redux';

import CategoryIndex from './category_index';
import { fetchCategory } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    categoryObj: state.entities.categories || {},
    projects: Object.values(state.entities.projects) || [],
    creators: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
