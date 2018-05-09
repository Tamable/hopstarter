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
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        <div className="session-text-top">
        <p>{this.props.linkText}</p>
        <p className="session-link">{this.props.link}</p>
        </div>
        <ul>
          {this.props.errors.map((error, i) => {
            <li key={`${i}`}>{error}</li>
          })}
        </ul>
          <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email:"></input>
        <br></br>
          <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password:"></input>
          <input type="submit" value={this.props.buttonText}></input>
      </form>
    )
  }
}

export default withRouter(SessionForm)
