import { connect} from 'react-redux';
import EditPledgeForm from './edit_pledge_form';
import { updatePledge, deletePledge } from '../../actions/pledge_actions';
import { fetchUser } from '../../actions/user_actions';
import { addFlashMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.id]
  const projectId = project.id
  const creator = state.entities.users[project.creator_id]
  const currentUser = state.entities.users[state.session.id]

  return {
    pledge: {
      amount: '',
      project_id: projectId,
      supporter_id: state.session.id,
      id: ''
    },
    errors: state.errors.pledge,
    project,
    creator,
    buttonText: 'Update my pledge',
    currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (pledge) => dispatch(updatePledge(pledge)),
    deletePledge: (id) => dispatch(deletePledge(id)),
    addFlashMessage: (message) => dispatch(addFlashMessage(message)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPledgeForm);
