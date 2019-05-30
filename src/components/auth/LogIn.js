import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Welcome from "../landing/Welcome"
import "../landing/SignIn.css"
import { withRouter} from 'react-router-dom';


class LogIn extends React.Component {

    state = {
      userName: "",
      password: ""
    };
  
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
      .then(() => this.props.history.push("/dashboard"));
  }

  SignUp = () => {
    this.props.history.push("/")
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
              <Input type="username" name="userName" id="userName" autoComplete="off" placeholder="Username" onChange={this.handleFieldChange}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" autoComplete="off" name="password" id="password" placeholder="Password"
              onChange={this.handleFieldChange}/>
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={this.handleLogin}>Log In</Button>
        <Button onClick={this.SignUp} color="link">Don't have an account?</Button>
      </Form>
      </React.Fragment>
    );
  }
}
export default withRouter(LogIn)