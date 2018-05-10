import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    let userInfo = {
      email: 'test@email.com',
      password: 'password123'
    }
    this.props.processForm(userInfo);
  }

  render() {
    let nameInput;
    if (this.props.header === 'Sign up') {
      nameInput = <input type="text" onChange={this.update('name')} value={this.state.name} placeholder='Name:' className='SignupName'></input>;
    }

    let demoButton;
    if (this.props.header === 'Log in') {
      demoButton = <input type="submit" value="Sign in as a guest" onClick={this.demoLogin} className='demo-login'></input>;
    }

    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        <h1 className="session-text-top">{this.props.header}</h1>
        <ul className="session-error">
          {this.props.errors.map((error, i) => {
            return <li key={`${i}`}>{error}</li>
          })}
        </ul>
          { nameInput }
          <input type="text" onChange={this.update('email')} value={this.state.email} placeholder='Email: '></input>
        <br></br>
          <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password:"></input>
          <input className='enter-button' type="submit" value={this.props.buttonText}></input>
          { demoButton }
          <div className="session-text-bottom">
          <p>{this.props.linkText}</p>
          <p className="session-link">{this.props.link}</p>
          </div>
      </form>
    )
  }
}

export default withRouter(SessionForm)
