import React, {Component} from 'react';



class MessageList extends Component {

  constructor(props) {
  super(props);

  this.state = {
    messages: [],
    username: "",
    content: "",
    sentAt: "",
    RoomID: "",


  };
  this.handleChange = this.handleChange.bind(this);
  this.messagesRef = this.props.firebase.database().ref('messages');
  this.handleMessageSend = this.handleMessageSend.bind(this);
}

  componentDidMount (){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({messages: this.state.messages.concat(message) })
    });


  }

  handleMessageSend(e){
    e.preventDefault();
    const messageRef = this.props.firebase.database().ref("messages/");
    messageRef.push({
      username: this.state.username,
      content: this.state.content,
      sentAt: this.state.sentAt,
      roomID: this.state.roomID
    });
    this.setState({ username: "", content: "", sentAt: "", roomID:""});
}



  handleChange(e){
    if(typeof this.props.activeRoom.key === 'undefined'){
      alert("select room first!")
      return;

    }

    else{
      if(this.props.currentUser!==null){
        this.setState({username: this.props.currentUser});
      }
      else{
        this.setState({username: "Guest"});
      }
      this.setState({
        sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
        roomID: this.props.activeRoom.key,
        content: e.target.value});
    }

  }


  render(){


    return(
      <section className="the-message-list">
        <h1>{this.props.activeRoom.name}</h1>
          <section className='messagelist'>
          {
            this.state.messages.map( (message, index) => {
              if (message.roomID === this.props.activeRoom.key) {
                return <div key={message.key}> {message.username}: {message.content} </div>
                }
                return null;
              }


            )}
        <form id="newMessageForm" onSubmit={this.handleMessageSend}>
          <input type="text" placeholder="Type message here" value={this.state.content} onChange={this.handleChange} />
          <input className="new-message-button" type="submit" value="send"/>
        </form>
  </section>


      </section>



    )
  }
}

export default MessageList;
