import React, { Component } from "react";
import { withRouter } from 'react-router'
import './friends.css'
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';

class FriendsListItem extends Component {

	handleDisplayCondition = () => {
		if (this.props.isFriend) {
			return <span className="remove-friend" onClick={ this.handleClickDelete }><FaUserTimes /></span>
		} else {
			return <span className="add-friend" onClick={ this.handleClickAdd }><FaUserPlus /></span>
		}
	}

	handleClickAdd = (event) => {
		this.props.addFriend({
			currentUserId: this.props.activeUser.id,
			friendId: this.props.user.id
		});
		this.props.history.push("/friends")
	}

	handleClickDelete = (event) => {
		this.props.deleteFriend(this.props.friend.id);
		this.props.history.push("/friends")
	}

	render () {
		return (
			<div>
				<h3 className="friend-option">@{ this.props.user.firstName }</h3>
				{ this.handleDisplayCondition() }
			</div>
		)
	}
}

export default withRouter(FriendsListItem)