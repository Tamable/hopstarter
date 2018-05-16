import React from 'react';

import FlashMessage from './flash_message';

class FlashMessagesList extends React.Component {

  render() {
    let messages;
    if (this.props.messages) {
      messages = this.props.messages.map((message) => {
        return (
          <li key={message.id}>
            <FlashMessage message={message} deleteMessage={this.props.deleteMessage}/>
          </li>
        )
      })
    }

    return (
      <ul className="flash-message">{messages}</ul>
    )
  }
}

export default FlashMessagesList;
