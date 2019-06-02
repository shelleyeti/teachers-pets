import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TaskDash from './TaskDash'
import EventsDash from './EventsDash'
import NewsDash from './NewsDash'
import MessageDash from './MessageDash'


export default class DashBody extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Events
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Tasks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              News
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Messages
            </NavLink>
          </NavItem>
        </Nav>
        <Container>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <TaskDash activeUser={this.props.activeUser}
                    tasks={this.props.tasks} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <EventsDash activeUser={this.props.activeUser}
                    events={this.props.events} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <NewsDash activeUser={this.props.activeUser}
                    news={this.props.news} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <MessageDash activeUser={this.props.activeUser}
                  messages={this.props.messages} />
              </Col>
            </Row>
          </TabPane>
        </Container>
      </>
    );
  }
}