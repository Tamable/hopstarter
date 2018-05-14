import { connect } from 'react-redux';

import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.entities.projects),
    categories: Object.values(state.entities.categories)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
