import React from 'react';

class FlashMessage extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: props.message
  //   };
  //   this.deleteMessage = this.deleteMessage.bind(this);
  // };
  //
  // deleteMessage(e) {
  //   e.preventDefault();
  //   this.setState({
  //     message: null
  //   });
  // };

  render () {
    const { id, type, text } = this.props.message;
    return (
      <div>
        <button onClick={this.props.deleteMessage} className="message-close"><span>&times;</span></button>
        {text.toString()}
      </div>
    );
  };
};

export default FlashMessage;
