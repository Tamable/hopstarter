import { connect } from 'react-redux';

import FlashMessagesList from './flash_messages_list';
import { deleteMessage } from '../../actions/message_actions';

const mapStateToProps = (state) => {
  return {
    messages: state.entities.flashMessages || {},
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage: (id) => dispatch(deleteMessage(id))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(FlashMessagesList);
