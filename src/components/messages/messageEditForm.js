import React, { Component } from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";
import MessagesManager from "../../modules/messagesManager";
import "./messages.css";

export default class MessageEditForm extends Component {
  state = {
    body: "",
    userName: "",
    dateTime: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    MessagesManager.getMessage(this.props.match.params.messageId).then(message => {
      console.log(message)
      this.setState({
        body: message.body,
        userName: message.userName,
        dateTime: message.dateTime
      });
    });
  }

  updateMessage = evt => {
    const messageObj = {
      id: this.props.match.params.messageId,
      body: this.state.body,
      userName: this.state.userName,
      dateTime: this.state.dateTime
    };
    this.props.editMessage(messageObj);
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="mx-2">Edit Message</h1>
        <Form>
          <InputGroup className="m-2 editInput">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Edit text</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              required
              id="body"
              value={this.state.body}
              onChange={this.handleFieldChange}
            />
          </InputGroup>
          <Button
            className="btn btn-outline-primary m-2"
            size="md"
            onClick={this.updateMessage}
          >
            Edit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

// Edit message inline like tasks. 
// How should we style the chat so it looks good for mobile.
// How to style events section. 
// How to use modals for delete?
// how to clear input field on chat after submit?
// how to make chat scroll to bottom?