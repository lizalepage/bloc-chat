import React, {Component} from 'react'

class Popup extends React.Component {
  render() {
    return (
      <form id="newRoomForm">
        <label>Create New Room</label>
        <input type="text"/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}
export default Popup;
