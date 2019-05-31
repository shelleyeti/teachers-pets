import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, CardColumns } from "reactstrap";
import EventItem from "./eventItem";

class EventList extends Component {
  render() {
    return (
      <section className="Events">
        <div className="AddEventsButton">
          <Button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            Add Event
          </Button>
        </div>
        <h1>Your Events</h1>
        <CardColumns>
          {this.props.events.map(item => {
            return (
              <EventItem
                key={item.id}
                event={item}
                {...this.props}
                deleteEvents={this.props.deleteEvents}
              />
            );
          })}
        </CardColumns>
      </section>
    );
  }
}

export default withRouter(EventList);
