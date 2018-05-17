import React from 'react';
import { connect } from 'react-redux';

import ProjectForm from './project_form';
import { fetchProject, updateProject, deleteProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.id] || {},
    categories: Object.values(state.entities.categories),
    addRewardButton: "Add new rewards",
    editRewardButton: "Edit existing rewards",
    deleteButton: "X Delete this project",
    currentUserId: state.session.id,
    errors: state.errors.pledge
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    action: (project) => dispatch(updateProject(project)),
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

class EditPostForm extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchCategories();
  }

  render() {
    const { action, fetchCategories, buttonText, project, categories, deleteProject, currentUserId, addRewardButton, editRewardButton, deleteButton } = this.props;

    return (
      <ProjectForm action={action} project={project} buttonText={buttonText} categories={categories} deleteProject={deleteProject} currentUserId={currentUserId} addRewardButton={addRewardButton} editRewardButton={editRewardButton} deleteButton={deleteButton} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
