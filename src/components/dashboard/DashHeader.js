import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import { withRouter } from 'react-router'
import './Dashboard.css'


class DashHeader extends Component {
  constructor(props) {
    super(props);
  }
  renderSettings = () => {
    this.props.history.push("/settings/")
  }

  render () {
    return (
      <div>
        <Jumbotron fluid className="dash-header-container">
          <Container fluid>
            <h1 className="display-3">Good to see you, { this.props.activeUser.firstName }.</h1>
            <p className="lead">Let's see what you were doing last.</p>
          </Container>
        </Jumbotron>
        <React.Fragment>
          <Button className="settings-link" onClick={ this.renderSettings } color="link">Settings</Button>
        </React.Fragment>
      </div>
    )
  }
}

export default withRouter(DashHeader)
