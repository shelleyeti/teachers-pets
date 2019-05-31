import React, { Component } from 'react'
import { withRouter } from 'react-router'
import FriendsListItem from './friendsListItem'
// import "./Animal.css"

class FriendsList extends Component {

    render() {
        return (
            <section className="friends">
                {/* <div className="animalButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>Hatmit Animal</button>
                </div> */}
                <h1>Public User List</h1>
                <div>
                {
                    this.props.user.map(item => {
                        
                        let foundFriend = false;
                        this.props.friend.forEach(friend => {
                            if(friend.friendId == item.id){
                                foundFriend = true;
                            }
                        })
                        
                        return <FriendsListItem key={item.id} user={item} //{...this.props}
                            deleteFriend={this.props.deleteFriend} isFriend={foundFriend} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(FriendsList)