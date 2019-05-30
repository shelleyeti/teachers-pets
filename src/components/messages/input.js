import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    body: ""
  }

  onChange(e) {
    this.setState({body: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({body: ""});
    // this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.body}
            type="text"
            placeholder="Enter your message and press Submit"
            autoFocus={true}
          />
          <button className="btn btn-outline-primary btn-sm">Submit</button>
        </form>
      </div>
    );
  }
}

export default Input;