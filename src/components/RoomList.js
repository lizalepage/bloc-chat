import React, {Component} from 'react';
import * as firebase from 'firebase';



class RoomList extends Component {

  constructor(props) {
  super(props);

  this.state = {
    rooms: [],
    newRoomName: "",


  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.roomsRef = this.props.firebase.database().ref('rooms');

}

  componentDidMount (){
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({rooms: this.state.rooms.concat(room) })
    });
  }

  handleChange(event){
    this.setState({newRoomName: event.target.value});

  }

  handleSubmit(event) {
    this.roomsRef.push({name: this.state.newRoomName});
    event.preventDefault();
    this.setState({newRoomName: ""});

  }





  render(){

    return(
      <section className="chat-box">
        <h1 className="chat-room-title">Chat Rooms </h1>
        {
          this.state.rooms.map((room, index) =>
          <li key={room.key} className="chat-room-name"> <button onClick={() => this.props.activateRoom(room)}>  {room.name}
          </button>
          </li>

        )
      }
      <form id="newRoomForm" onSubmit={this.handleSubmit}>
        <label>
          Create New Room
          <input type="text" key={this.state.rooms.length} value={this.state.newRoomName} onChange={this.handleChange} />
        </label>
        <input className="new-room-button" type="submit" value="Add"/>
      </form>



      </section>



    )
  }
}

export default RoomList;
