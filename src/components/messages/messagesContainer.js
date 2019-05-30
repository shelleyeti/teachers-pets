import React, { Component } from "react";
import MessageList from "./messagesList";
import Input from "./input";
import "./messages.css";

export default class MessagesContainer extends React.Component {
  render() {
    return (
      <section>
        <div className="messageContainer">
          <MessageList messages={this.props.messages} />
        </div>
        <div className="messageInput">
          <Input onSendMessage={this.onSendMessage} />
        </div>
      </section>
    );
  }
}
