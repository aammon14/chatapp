import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import './App.css';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from'./components/NewRoomForm';

import { testToken, instanceLocator, roomId } from './index'

class App extends Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: 'aammon',
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text);
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;
