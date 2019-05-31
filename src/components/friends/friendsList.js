import React, { Component } from 'react'
import { withRouter } from 'react-router'
import FriendsListItem from './friendsListItem'
// import "./Animal.css"

class FriendsList extends Component {

    render() {
        return (
            <section className="friends">
                <h1>Public User List</h1>
                <div>
                {
                    this.props.user.map(item => {
                        
                        let foundFriend = false;
                        let friendObj = {};
                        this.props.friend.forEach(friend => {
                            //make sure friend of current user logged in - inside this if user.id == friend.currentUserId &&
                            if(friend.friendId === item.id){
                                foundFriend = true;
                                friendObj = friend;
                            }
                        })
                        
                        return <FriendsListItem key={item.id} user={item} //{...this.props}
                            deleteFriend={this.props.deleteFriend} isFriend={foundFriend} friend={friendObj} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(FriendsList)