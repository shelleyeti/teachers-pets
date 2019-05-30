import React, { Component } from 'react';
import { withRouter } from 'react-router';

class TaskCompleteList extends React.Component {
    render() {
      return (
        <div className="completeTask">
          <h1>Complete Task</h1>
        </div>
      );
    }
  }

  export default withRouter(TaskCompleteList)