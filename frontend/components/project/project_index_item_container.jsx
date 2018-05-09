import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.id]

  return {
    creator: Object.values(state.entities.user)[project.creator_id]
    category: Object.values(state.entities.categories)[project.category_id]
  }
}

export default connect(mapStateToProps, null)(ProjectIndexItem)
