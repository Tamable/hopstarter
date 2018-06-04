import React from 'react';

class FlashMessage extends React.Component {

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
