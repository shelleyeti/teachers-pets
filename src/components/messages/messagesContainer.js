import React, { Component } from "react";
import MessageList from "./messagesList";
import Input from "./input";
import "./messages.css";

export default class MessagesContainer extends React.Component {
  render() {
    return (
      <section className="messagesSection">
        <div className="messageContainer">
          <MessageList {...this.props} messages={this.props.messages} />
        </div>
        <div className="messageInput">
          <Input {...this.props} onSendMessage={this.onSendMessage} />
        </div>
      </section>
    );
  }
}
