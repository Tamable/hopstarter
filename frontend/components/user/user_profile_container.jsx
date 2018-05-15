import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryObj: state.entities.categories || {},
    user: state.entities.users[ownProps.match.params.id],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchCategories: () => dispatch(fetchCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
