import React from 'react';
import { Link } from 'react-router-dom';

class PledgeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.pledge;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      this.setState({ amount: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    return (
      <div className='pledge-page'>
        <div className='pledge-title-box'>
          <h1>{this.props.project.title}</h1>
          <span>by {this.props.creator.name}</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1>Support this project</h1>
          <div className='pledge-box'>
            <span>Make a pledge</span>
            <p>Pledge amount</p>
            <div className='amount-box-container'>
              <p>$</p>
              <input type='text' value={this.state.amount} onChange={this.update()}></input>
            </div>
            <button className='pledge-commit-button'>{this.props.buttonText}</button><br></br>
          <ul className="error">
            {this.props.errors.map((error, i) => {
              return <li key={`${i}`}>{error}</li>
            })}
          </ul>
        </div>
      </form>
    </div>
    );
  }
}

export default PledgeForm;
