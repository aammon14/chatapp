import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const instanceLocator = 'v1:us1:1a417e33-fe32-4794-900c-532be077b49e';
const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/1a417e33-fe32-4794-900c-532be077b49e/token';
const username = 'Andrew';
const roomId = 11341760;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export { testToken, instanceLocator, username, roomId }
