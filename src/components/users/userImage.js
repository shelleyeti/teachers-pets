import React, { Component } from "react"
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container
} from 'reactstrap'
import "./profile.css"

export default class UserImage extends Component {
  state = {
    userImage: ""
  }

  displayConditions = () => {
    if (this.props.editMode) {
      //edit mode true
      return <div>
        <Card>
          <span>
            <input type="text" id="user-image" defaultValue={ this.props.activeUser.userImage } />
          </span>
        </Card>
      </div >
    } else {
      //edit mode false
      return <div>
        <Card>
          <img src={ this.props.activeUser.userImage } alt="user profile" className="user-image" />
        </Card>
      </div>

    }
  }

  render () {
    return (
      <div>
        { this.displayConditions() }
      </div>
    );
  }
}