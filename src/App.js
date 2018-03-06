import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js'


var config = {
  apiKey: "AIzaSyB6GzkfHwjR6j5eC6PmmSAXD44XEEgtdFg",
  authDomain: "bloc-chat-liza.firebaseapp.com",
  databaseURL: "https://bloc-chat-liza.firebaseio.com",
  projectId: "bloc-chat-liza",
  storageBucket: "bloc-chat-liza.appspot.com",
  messagingSenderId: "427199940475"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeRoom: "Welcome",

    };

  this.activateRoom = this.activateRoom.bind(this);

  }

  activateRoom(room){
    this.setState({activeRoom: room})
    console.log(this.state.activeRoom);


  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat</h1>
        </header>
        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} activateRoom={this.activateRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
      </div>


    );
  }
}

export default App;
