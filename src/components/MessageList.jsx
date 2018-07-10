import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'Andrew',
    text: 'Hey, how is it going?'
  },
  {
    senderId: 'John',
    text: 'It\'s going well, how about you?'
  },
  {
    senderId: 'Andrew',
    text: 'That\'s great! I\'m also doing well!'
  }
]

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList;