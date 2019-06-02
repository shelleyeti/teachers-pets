import React, { Component } from "react";
import MessageList from "./messagesList";
import MessageInput from "./input";
import "./messages.css";

export default class MessagesContainer extends Component {
  render() {
    return (
      <section className="messagesSection">
        <div className="messageInput">
          <MessageInput {...this.props} addMessage={this.props.addMessage} />
        </div>
        <div className="messageContainer">
          <MessageList {...this.props} messages={this.props.messages} />
        </div>
      </section>
    );
  }
}
