import React, {Component} from 'react';
import * as firebase from 'firebase';


class MessageList extends Component {

  constructor(props) {
  super(props);

  this.state = {
    messages: [],


  };

  this.messagesRef = this.props.firebase.database().ref('messages');

}

  componentDidMount (){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({messages: this.state.messages.concat(message) })
    });


  }


  render(){


    return(
      <section className="the-message-list">
        <h1>{this.props.activeRoom.name}</h1>
          <section className='messagelist'>
          {
            this.state.messages.map( (message, index) => {
              if (message.roomID === this.props.activeRoom.key) {
                return <div key={message.roomID}> {message.username}: {message.content} </div>
                }
                return null;
      }


  )}
  </section>


      </section>



    )
  }
}

export default MessageList;
