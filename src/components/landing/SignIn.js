import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./SignIn.css"
import Welcome from "./Welcome"
import TimeOut from "./TimeOut"
import LogIn from "../auth/LogIn"
import ReactDOM from 'react'
import { withRouter} from 'react-router-dom';

class SignIn extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewUser = evt => {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email
      };
     
      this.props.addUser(user)
      .then(() => this.props.history.push("/dashboard"));
    
    }

    renderLogIn = () => {
      this.props.history.push("/login")
    }


  render() {
    return (
      <React.Fragment>
      <Welcome />
      <Form className="new-user-form">
      <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="First Name"
          onChange={this.handleFieldChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Last Name"
          onChange={this.handleFieldChange}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="userName">Username</Label>
              <Input type="userName" name="userName" id="userName" placeholder="Username" onChange={this.handleFieldChange} />
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
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="nutshell@gmail.com"
          onChange={this.handleFieldChange}/>
        </FormGroup>

        <Button className="landing-buttons" onClick={this.constructNewUser}>Sign up</Button>
        <Button onClick={this.renderLogIn} color="link">Already have an account?</Button>

      </Form>
      </React.Fragment>
    );
  }
}

export default withRouter(SignIn)