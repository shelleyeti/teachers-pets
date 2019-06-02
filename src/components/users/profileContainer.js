import React, { Component } from "react"
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container
} from 'reactstrap'
import InputSettings from "./inputSettings"
import UserImage from "./userImage"
import "./profile.css"

export default class ProfileContainer extends Component {
  state = {
    editMode: false
  }

  handleEditState = () => {
    this.setState(
      { editMode: true }
    )
  }

  handleEditImage = () => {
    this.setState(
      { editMode: true }
    )
  }

  handleSaveImage = () => {
    const userImage = document.querySelector("#user-image").value
    this.props.editUser({
      id: this.props.activeUser.id,
      firstName: this.props.activeUser.firstName,
      lastName: this.props.activeUser.lastName,
      userName: this.props.activeUser.userName,
      email: this.props.activeUser.email,
      password: this.props.activeUser.password,
      userImage: userImage
    })
    this.setState(
      { editMode: false }
    )
  }

  handleSaveState = () => {
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const userName = document.querySelector("#userName").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    this.props.editUser({
      id: this.props.activeUser.id,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      userImage: this.props.activeUser.userImage
    })
    this.setState(
      { editMode: false }
    )
  }

  render () {
    return (
      <Container className="profile-section">
        <div>
          <h1>Weclome back { this.props.activeUser.firstName } { this.props.activeUser.lastName }</h1>
        </div>
        <div className="user-image">
          <UserImage { ...this.props }
            editMode={ this.state.editMode }
            activeUser={ this.props.activeUser }
            editUser={ this.props.updateUser }
          />
          { this.state.editMode ? <button onClick={ this.handleSaveImage }>Save Image</button> : <button onClick={ this.handleEditImage }>Edit Image</button> }
        </div>
        <div className="input-fields-section">
          <InputSettings  { ...this.props }
            editMode={ this.state.editMode }
            activeUser={ this.props.activeUser }
            editUser={ this.props.updateUser } />
          { this.state.editMode ? <button onClick={ this.handleSaveState }>Save</button> : <button onClick={ this.handleEditState }>Edit</button> }
        </div>
      </Container>
    );
  }
}
