import React, { Component } from "react";
import { withRouter } from 'react-router'
import './friends.css'
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa'
import NoImage from './no-profile-image.png'

class FriendsListItem extends Component {

	handleDisplayCondition = () => {
		if (this.props.isFriend) {
			return <span className="remove-friend" onClick={ this.handleClickDelete }><FaUserTimes /></span>
		} else {
			return <span className="add-friend" onClick={ this.handleClickAdd }><FaUserPlus /></span>
		}
	}

	handleImage = () => {
		if (this.props.user.userImage != null) {
			return <img src={ this.props.user.userImage } alt="user profile" className="user-image-friends" />
		} else {
			return <img src={ NoImage } alt="user profile" className="user-image-friends" />
		}
	}

	handleClickAdd = (event) => {
		this.props.addFriend({
			currentUserId: this.props.activeUser.id,
			friendId: this.props.user.id
		});
		this.props.history.push("/messages")
	}

	handleClickDelete = (event) => {
		this.props.deleteFriend(this.props.friend.id);
		this.props.history.push("/messages")
	}

	render () {
		return (
			<div className="user-card">
				<h3 className="friend-option"> { this.handleImage() } @{ this.props.user.firstName }</h3>
				{ this.handleDisplayCondition() }
			</div>
		)
	}
}

export default withRouter(FriendsListItem)