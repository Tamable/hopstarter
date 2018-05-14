import React from 'react';
import { connect } from 'react-redux';

import ProjectForm from './project_form';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.id] || {},
    categories: Object.values(state.entities.categories),
    buttonText: "Update Project"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    action: (project) => dispatch(updateProject(project))
  }
}

class EditPostForm extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchCategories();
  }

  render() {
    const { action, fetchCategories, buttonText, project, categories } = this.props;

    return (
      <ProjectForm action={action} project={project} buttonText={buttonText} categories={categories} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
