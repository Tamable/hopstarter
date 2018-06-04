import { connect } from 'react-redux';

import FeaturedCategory from './featured_category';

const mapStateToProps = (state) => {

  return {
    categories: state.entities.categories || {},
    projects: state.entities.projects || {},
    users: state.entities.users || {},
    pledges: state.entities.pledges || {}
  }
}

export default connect(mapStateToProps)(FeaturedCategory);
