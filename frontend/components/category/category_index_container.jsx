import { connect } from 'react-redux';

import CategoryIndex from './category_index';
import { fetchCategory } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  const categoryIdArr = Object.keys(state.entities.categories);
  const showCategoryId = categoryIdArr[Math.floor(Math.random() * categoryIdArr.length)]

  return {
    categoryObj: state.entities.categories || {},
    showCategoryId,
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
