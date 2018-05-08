import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(merge({}, this.state))
    this.setState({
      email: "",
      password: ""
    })
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    // <span>Please {this.props.formType} or {this.props.link}</span>
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.linkText}{this.props.link}
        <ul>
          {this.props.errors.map((error, i) => {
            <li key={`${i}`}>{error}</li>
          })}
        </ul>
        <label>
          Email:
          <input type="text" onChange={this.update('email')} value={this.state.email}></input>
        </label><br></br>
        <label>
          Password:
          <input type="password" onChange={this.update('password')} value={this.state.password}></input>
        </label><br></br>
      <button>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default withRouter(SessionForm)
