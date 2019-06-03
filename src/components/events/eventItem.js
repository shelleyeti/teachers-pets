import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import "./events.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  ButtonGroup
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class EventItem extends Component {
  state = {
    saveDisabled: false
  };

  handleClickDelete = event => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteEvents(this.props.event.id);
  };

  handleClickDetails = event => {
    this.setState({
      saveDisabled: true
    });
  };

  render () {
    return (
      <Card className="EventItem m-2">
        <CardImg top width="100%" src={ this.props.event.imgUrl } />
        <CardBody>
          <CardTitle>Title: { this.props.event.title }</CardTitle>
          <CardText>Summary: { this.props.event.summary }</CardText>
          <CardText>Location: { this.props.event.location }</CardText>
          <CardText>Date: { this.props.event.date }</CardText>
          <ButtonGroup className="btn-group ml-1" size="sm">
            <Button onClick={ () => {
              this.props.history.push(`/events/${this.props.event.id}/edit`);
            } } className="btn btn-outline-primary eventBtn"><FaEdit /></Button>
            <Button onClick={ this.handleClickDelete } className="btn btn-outline-danger eventBtn"><FaTrashAlt /></Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    );
  }
}

export default EventItem;
