import React, { Component } from "react";
import MessageList from "./messagesList";
import MessageInput from "./input";
import MessageEditModal from "./messageEditForm"
import "./messages.css";

export default class MessagesContainer extends Component {
  render () {
    return (
      <section className="messagesSection">

        {/* <MessageEditModal header={"Edit Task?"} toggleModal={this.state.modalShow} handleClickYes={this.handleClickedEdit} handleClickNo={this.handleClickedNo}/> */ }

        <div className="messageContainer">
          <MessageList { ...this.props } activeUser={ this.props.activeUser } messages={ this.props.messages } />
        </div>
        <div className="messageInput">
          <MessageInput { ...this.props } activeUser={ this.props.activeUser } addMessage={ this.props.addMessage } />
        </div>
      </section>
    );
  }
}
