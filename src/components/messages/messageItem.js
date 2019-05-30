import React, { Component } from "react";
import { Link } from "react-router-dom";

class MessageItem extends Component {
  state = {
    saveDisabled: false
  };

  handleClickDelete = event => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteMessage(this.props.message.id);
  };

  render() {
    return (
      <div>
        <div className="cardBody">
          <div className="card-body">
            <p>
              {this.props.message.userName}: {this.props.message.message}
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => {
                this.props.history.push(
                  `/messages/${this.props.message.id}/edit`
                );
              }}
            >
              Edit Message
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              disabled={this.state.saveDisabled}
              onClick={this.handleClickDelete}
            >
              Delete Message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
