import React, { Component } from 'react'
import DashHeader from './DashHeader'

class Dashboard extends Component {
  render() {
        return (
    <React.Fragment>
    {
        <DashHeader activeUser={this.props.activeUser} />
    }
    </React.Fragment>
        );
    };
};

export default Dashboard;