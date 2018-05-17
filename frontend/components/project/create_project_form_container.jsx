import { connect } from 'react-redux';

import ProjectForm from './project_form';
import { createProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => {
  return {
    project: {
      title: '',
      creator_id: state.session.id,
      category_id: '',
      description: '',
      funding_goal: '',
      end_date: ''
    },
    categories: Object.values(state.entities.categories),
    addRewardButton: "Add rewards",
    editRewardButton: null,
    deleteButton: null,
    errors: state.errors.project
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (project) => dispatch(createProject(project)),
    fetchCategories: () => dispatch(fetchCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
