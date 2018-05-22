import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchProjects } from '../../actions/project_actions';
import { fetchPledges } from '../../actions/pledge_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.entities.categories || {},
    user: state.entities.users[state.session.id],
    projects: state.entities.projects,
    pledges: state.entities.pledges
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchPledges: () => dispatch(fetchPledges())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
