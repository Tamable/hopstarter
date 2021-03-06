import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class EditPledgeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.pledge;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelPledge = this.cancelPledge.bind(this);
  }

  componentDidMount() {
    this.props.fetchPledges();
    this.props.fetchUser(this.props.currentUser.id);
    let existingPledge = {};
    this.props.currentUser.pledges.forEach((pledgeId) => {
      if (this.props.pledges[pledgeId].project_id == this.props.project.id) {
        existingPledge = this.props.pledges[pledgeId]
      }
    })
    this.setState({
      id: existingPledge.id || ''
    })
  }

  update() {
    return e => {
      this.setState({ amount: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((pledge) => {
      this.props.addFlashMessage({
        type: 'succcess',
        text: 'Your pledge has been updated!'
      });
      this.props.history.replace(`/projects/${this.props.match.params.id}`)
    });
  }

  cancelPledge(e) {
    e.preventDefault();
    this.props.deletePledge(this.state.id).then(() => {
      this.props.addFlashMessage({
        type: 'success',
        text: 'Your pledge has been canceled'
      })
      this.props.history.replace(`/projects/${this.props.match.params.id}`)
    })
  }

  errors() {
    if (this.props.erros) {
      return (
        this.props.errors.map((error) => {
          return (<li key={error}>{error}</li>);
        })
      )
    }
  }

  render() {
    let existingPledge = {};
    let existingPledgeAmount = 0;
    Object.values(this.props.currentUser.pledges).forEach((pledgeId) => {
      if (typeof this.props.pledges[pledgeId] != 'undefined') {
        if (this.props.pledges[pledgeId].project_id == this.props.project.id) {
          existingPledge = this.props.pledges[pledgeId]
          existingPledgeAmount = existingPledge.amount;
        }
      }
    })


    return (
      <div className='pledge-page'>
        <Link to={`/projects/${this.props.match.params.id}`}><div className='pledge-title-box'>
          <h1>{this.props.project.title}</h1>
          <span>by {this.props.creator.name}</span>
        </div></Link>
        <ul className="error">
          { this.errors() }
        </ul>
        <section className="pledge-form-section">
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1 className='support-title'>Support this project</h1>
              <div className='pledge-box'>
                <label className='check-container'>Update my pledge
                <input type='checkbox' />
                <span className='checkmark'></span>
                </label>
                <span></span>
                <p>Currently pledging ${existingPledgeAmount}</p>
                <div className='amount-box-container'>
                  <p>$</p>
                  <input type='text' value={this.state.amount} onChange={this.update()}></input>
                </div>
                <button className='pledge-commit-button'>{this.props.buttonText}</button><br></br>
              </div>
            </form>
            <button className="pledge-cancel-button" onClick={this.cancelPledge}>Cancel my pledge</button>
          </div>
          <div className='pledge-right-side'>
            <div className='disclaimer'>
              <span className='disclaimer-title'>Hopstarter is not a store.</span><br></br>
              <span className='disclaimer-body'>It's a way to bring creative projects to life.</span><br></br>
              <p>Hopstarter does not guarantee projects or investigate a creator's ability to complete their project. It is the responsibility of the project creator to complete their project as promised, and the claims of this project are theirs alone.</p>
            </div>
            <span className='faq-title'>FREQUENTLY ASKED QUESTIONS</span><br></br>
            <div className='faq'>
              <span>▶ How do I pledge?</span><br></br>
              <p className='answer'>Enter your pledge amount and select a reward. Then, enter your payment information to complete the checkout process.</p>
              <br></br>
              <span>▶ When is my card charged?</span><br></br>
              <p className='answer'>If this project is successfully funded, your card will be charged on {this.props.project.end_date}, along with all the other backers of this project.</p>
              <br></br>
              <span>▶ So I'm only charged if funding succeeds?</span><br></br>
              <p className='answer'>Yes! That's part of what makes Kickstarter special. If a project isn't successfully funded, no one pays anything.</p>
            </div>
        </div>
      </section>
    </div>
    );
  }
}

export default withRouter(EditPledgeForm);
