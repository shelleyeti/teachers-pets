import React, { Component } from "react"
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container
} from 'reactstrap'
import "./profile.css"

export default class InputSettings extends Component {
  state = {
    userId: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  displayConditions = () => {
    if (this.props.editMode) {
      //edit mode true
      return <div>
        <Card>
          <span>First Name:
            <input type="text" id="firstName" defaultValue={ this.props.activeUser.firstName } />
          </span>
          <span>Last Name:
            <input type="text" id="lastName" defaultValue={ this.props.activeUser.lastName } />
          </span>
          <span>Userame:
            <input type="text" id="userName" defaultValue={ this.props.activeUser.userName } />
          </span>
          <span>Email:
            <input type="text" id="email" defaultValue={ this.props.activeUser.email } />
          </span>
          <span>Password:
            <input type="password" id="password" defaultValue={ this.props.activeUser.password } />
          </span>
        </Card>
      </div >
    } else {
      //edit mode false
      return <div>
        <Card>
          <span>First Name: <label>{ this.props.activeUser.firstName }</label></span>
          <span>Last Name: <label>{ this.props.activeUser.lastName }</label></span>
          <span>Userame: <label>{ this.props.activeUser.userName }</label></span>
          <span>Email: <label>{ this.props.activeUser.email }</label></span>
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