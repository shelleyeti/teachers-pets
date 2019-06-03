import React, { Component } from 'react';
import FriendsList from './friendsList';
import MessagesContainer from '../messages/messagesContainer'
import './friends.css'

export default class MessagesFriendsContainer extends Component {
  render () {
    return (
      <div className='messages-friends'>
        <MessagesContainer { ...this.props }
          messages={ this.props.messages }
          deleteMessage={ this.props.deleteMessage }
          addMessage={ this.props.addMessage } />
        <FriendsList { ...this.props }
          activeUser={ this.props.activeUser }
          user={ this.props.user }
          friend={ this.props.friend }
          addFriend={ this.props.addFriend }
          deleteFriend={ this.props.deleteFriend }
          editFriend={ this.props.editFriend } />
      </div>
    );
  }
}