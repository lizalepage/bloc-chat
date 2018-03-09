import React, {Component} from 'react';
import * as firebase from 'firebase';


class User extends Component {

  constructor(props) {
  super(props);
  this.signIn = this.signIn.bind(this);
  this.signOut = this.signOut.bind(this);

  this.state = {

}
}

  signIn(e){
    e.preventDefault();
    const provider =  new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider)
    }



    signOut(e){
      e.preventDefault();
      this.props.firebase.auth().signOut();
      this.props.setUser({displayName: null });
    }

    componentDidMount(){
      this.props.firebase.auth().onAuthStateChanged( user => {
        this.props.setUser(user);
      });
    }



  render(){



    return(
      <section className="username-form">
        <div className = 'greeting'> Hi {this.props.currentUser==null?'Guest':this.props.currentUser} !</div>
        <form className="username-input">
          <input className="username-button" type="submit" onClick={this.signIn} value="Login"/>
          <input className="logout-button" type="submit" onClick={this.signOut} value="Logout"/>
        </form>


      </section>



    )
  }
}

export default User;
