import React, { Component } from 'react';
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class EventForm extends Component {

  // Set initial state
  state = {
    title: "",
    summary: "",
    imgUrl: "",
    location: "",
    date: "",
    userName: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {

    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEvent = evt => {
    const event = {
      title: this.state.title,
      summary: this.state.summary,
      imgUrl: this.state.imgUrl,
      location: this.state.location,
      date: this.state.date,
      userName: this.props.activeUser.userName
    }

    this.props.addEvent(event);
  }

  render () {
    return (
      <React.Fragment>
        <Form>
          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Event Title</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="title"
              onChange={ this.handleFieldChange }
            />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Summary</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="summary"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Location</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="location"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Image Address</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="imgUrl"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Date</InputGroupText>
            </InputGroupAddon>
            <Input type="date"
              required
              id="date"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          {/* //* maybe a checkbox that asks if youd like to favorite it and some sort of designation in your own news list? */ }
          <Button className="btn btn-outline-primary" size="sm" onClick={ this.constructNewEvent }>Submit</Button>
        </Form>
      </React.Fragment >
    );
  }
}