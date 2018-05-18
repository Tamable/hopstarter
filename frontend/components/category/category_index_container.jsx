import { connect } from 'react-redux';

import CategoryIndex from './category_index';
import { fetchCategories } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';
import { fetchPledges } from '../../actions/pledge_actions';

const mapStateToProps = (state) => {
  return {
    categories: state.entities.categories || {},
    projects: state.entities.projects || {},
    pledges: state.entities.pledges || {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchPledges: () => dispatch(fetchPledges())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
