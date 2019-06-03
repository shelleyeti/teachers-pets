import React, { Component } from "react"
import { Jumbotron, Container } from 'reactstrap';

export default class TimeOut extends Component {
  render () {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid className="welcome-container">
            <h1 className="display-3">Good to see you again, { this.props.firstName }!</h1>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}