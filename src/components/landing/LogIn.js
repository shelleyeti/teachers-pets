import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Welcome from "./Welcome"
import "./SignIn.css"

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };
  }

  handleFieldChange = (evt) => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
  }

  handleLogin = (e) => {
      e.preventDefault()

      sessionStorage.setItem(
          "credentials",
          JSON.stringify({
              userName: this.state.userName,
              password: this.state.password
          })
      )
  }
  render() {
    return (
      <React.Fragment>
      <Welcome />
      <Form className="new-user-form">
        <Row form>
          <Col md={6}>
          <FormGroup>
              <Label for="userName">Username</Label>
              <Input type="username" name="userName" id="userName" placeholder="Username" onChange={this.handleFieldChange}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password"
              onChange={this.handleFieldChange}/>
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={this.handleLogin}>Log In</Button>
      </Form>
      </React.Fragment>
    );
  }
}