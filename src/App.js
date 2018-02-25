import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


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


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RoomList/>
      </div>


    );
  }
}

export default App;
