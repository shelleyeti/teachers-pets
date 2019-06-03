import React, { Component } from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";
import EventsManager from "../../modules/eventsManager";

export default class EventEditForm extends Component {
  state = {
    title: "",
    summary: "",
    location: "",
    date: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    EventsManager.getEvent(this.props.match.params.eventId).then(event => {
      console.log(event)
      this.setState({
        title: event.title,
        summary: event.summary,
        location: event.location,
        date: event.date
      });
    });
  }

  updateEvent = evt => {

    const eventObj = {
      id: this.props.match.params.eventId,
      title: this.state.title,
      summary: this.state.summary,
      location: this.state.location,
      date: this.state.date
    };

    this.props.editEvent(eventObj);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Edit Event</h1>
        <Form>
          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Event Title</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              required
              id="title"
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Summary</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              required
              id="summary"
              value={this.state.summary}
              onChange={this.handleFieldChange}
            />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Location</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              required
              id="location"
              value={this.state.location}
              onChange={this.handleFieldChange}
            />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Date</InputGroupText>
            </InputGroupAddon>
            <Input
              type="date"
              required
              id="date"
              value={this.state.date}
              onChange={this.handleFieldChange}
            />
          </InputGroup>

          <Button
            className="btn btn-outline-primary"
            size="sm"
            onClick={this.updateEvent}
          >
            Edit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}
