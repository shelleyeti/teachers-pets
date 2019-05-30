import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./SignIn.css"
import Welcome from "./Welcome"
export default class SignIn extends React.Component {

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewUser = evt => {
      const user = {
        email: this.state.email,
        password: this.state.password,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        firstName: this.state.firstName,
        lastName: this.state.lastName
      };
    }


  render() {
    return (
      <React.Fragment>
      <Welcome />
      <Form className="new-user-form">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"
              onChange={this.handleFieldChange}/>
            </FormGroup>
          </Col>
        </Row>
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
        <Button onClick={this.constructNewUser}>Sign in</Button>
      </Form>
      </React.Fragment>

    );
  }
}