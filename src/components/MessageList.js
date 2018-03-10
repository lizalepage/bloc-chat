import React, {Component} from 'react';



class MessageList extends Component {

  constructor(props) {
  super(props);

  this.state = {
    messages: [],
    username: "",
    content: "",
    sentAT: "",


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

  handleMessageSend(){

    }

  handleChange(){

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
        <form id="newRoomForm" onSubmit={this.handleMessageSend}>
          <input type="text" value="write your message here" onChange={this.handleChange} />
          <input className="new-message-button" type="submit" value="send"/>
        </form>
  </section>


      </section>



    )
  }
}

export default MessageList;
