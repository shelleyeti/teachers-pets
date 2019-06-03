import React, { Component } from 'react'
import { withRouter } from 'react-router'
import FriendsListItem from './friendsListItem'

class FriendsList extends Component {

  render () {
    return (
      <section className="friends friends-column">
        <h1>Public User List</h1>
        <div>
          {
            this.props.user.map(item => {
              let foundFriend = false;
              let friendObj = {};
              this.props.friend.forEach(friend => {
                if (this.props.activeUser.id === friend.currentUserId && friend.userId === item.id) {
                  foundFriend = true;
                  friendObj = friend;
                }
              })
              return <FriendsListItem
                key={ item.id }
                user={ item }
                activeUser={ this.props.activeUser }
                addFriend={ this.props.addFriend }
                deleteFriend={ this.props.deleteFriend }
                isFriend={ foundFriend }
                friend={ friendObj } />
            })
          }
        </div>
      </section>
    )
  }
}

export default withRouter(FriendsList)