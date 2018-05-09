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
      name: "",
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

  demoLogIn() {
    return (e) => {
      this.setState({
        email: "test@email.com",
        password: "password123"
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        <h1 className="session-text-top">{this.props.header}</h1>
        <ul>
          {this.props.errors.map((error, i) => {
            <li key={`${i}`}>{error}</li>
          })}
        </ul>
          <input type="text" onChage={this.update('name')} value={this.state.name} placeholder='Name:' className='SignupName'></input>
          <input type="text" onChange={this.update('email')} value={this.state.email} placeholder='Email: '></input>
        <br></br>
          <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password:"></input>
          <input type="submit" value={this.props.buttonText}></input>
          <button onClick={this.demoLogIn}  className='demo-login'>Demo Log In</button>
          <div className="session-text-bottom">
          <p>{this.props.linkText}</p>
          <p className="session-link">{this.props.link}</p>
          </div>
      </form>
    )
  }
}

export default withRouter(SessionForm)
