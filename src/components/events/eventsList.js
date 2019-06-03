import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, CardColumns } from "reactstrap";
import EventItem from "./eventItem";

class EventList extends Component {
  render () {
    return (
      <section className="Events">
        <div className="addEventBtnDiv">
          <Button
            type="button"
            className="btn btn-outline-primary m-3"
            onClick={ () => {
              this.props.history.push("/events/new");
            } }
          >
            Add Event
          </Button>
        </div>
        <h1 className="mx-5">Your Events</h1>
        <CardColumns>
          { this.props.events.map(item => {
            if (item.userName === this.props.activeUser.userName) {
              return (
                <EventItem
                  activeUser={ this.props.activeUser }
                  key={ item.id }
                  event={ item }
                  { ...this.props }
                  deleteEvents={ this.props.deleteEvents }
                />
              );
            }
          }) }
        </CardColumns>
      </section>
    );
  }
}

export default withRouter(EventList);
