import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

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
              {this.props.message.userName}: {this.props.message.body}
            </p>
            <p>{this.props.message.dateTime}</p>
          </div>
          <div className="clearfix">
            <button
              className="btn btn-outline-danger btn-sm mx-2 float-right"
              disabled={this.state.saveDisabled}
              onClick={this.handleClickDelete}
            >
              <FaTrashAlt />
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm float-right"
              onClick={() => {
                this.props.history.push(
                  `/messages/${this.props.message.id}/edit`
                );
              }}
            >
              <FaEdit />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
