import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

export default class DashHeader extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">
              Good to see you {this.props.activeUser.firstName}.
            </h1>
            <p className="lead">Let's see what you were doing last.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
