import React, { Component } from "react";
import {
  Card, CardTitle, CardText, CardBody
} from 'reactstrap';

export default class BlankCard extends Component {

  render() {
    return (
      <>
        <Card className="NewsItem">
          <CardBody>
            <CardTitle>No News??</CardTitle>
            <CardText>Add some news to see some news, my dude.</CardText>
            <small className="text-muted">No Time, Like The Present</small>
          </CardBody>
        </Card>
      </>
    )
  }
}