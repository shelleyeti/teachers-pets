import React, { Component } from 'react'
import DashHeader from './DashHeader'
import DashBody from './DashBody'
import TaskDash from './TaskDash'

class Dashboard extends Component {
  render() {
        return (
    <React.Fragment>
    
        <DashHeader activeUser={this.props.activeUser} />
        <DashBody activeUser={this.props.activeUser}
                            events={this.props.events}
                            news={this.props.news}
                            friends={this.props.friends}
                            messages={this.props.messages} 
                            tasks={this.props.tasks} />
    </React.Fragment>
        );
    };
};

export default Dashboard;

