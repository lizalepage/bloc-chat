import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import Popup from './components/Popup.js';


var config = {
  apiKey: "AIzaSyB6GzkfHwjR6j5eC6PmmSAXD44XEEgtdFg",
  authDomain: "bloc-chat-liza.firebaseapp.com",
  databaseURL: "https://bloc-chat-liza.firebaseio.com",
  projectId: "bloc-chat-liza",
  storageBucket: "bloc-chat-liza.appspot.com",
  messagingSenderId: "427199940475"
};
firebase.initializeApp(config);



class App extends Component {
  constructor(props){
    super(props);

    this.state = {


    };


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat</h1>
        </header>
        <RoomList firebase={firebase}/>
      </div>


    );
  }
}

export default App;
