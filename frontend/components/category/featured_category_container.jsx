import { connect } from 'react-redux';

import FeaturedCategory from './featured_category';

const mapStateToProps = (state) => {
  const categoryIdArr = Object.keys(state.entities.categories);
  const showCategoryId = categoryIdArr[Math.floor(Math.random() * categoryIdArr.length)]

  return {
    showCategoryId,
    categoryObj: state.entities.categories || {},
    projects: Object.values(state.entities.projects) || [],
    creators: state.entities.users    
  }
}

export default connect(mapStateToProps)(FeaturedCategory);
