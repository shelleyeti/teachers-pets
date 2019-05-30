import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TaskCompleteItem from './tasksItem';

class TaskCompleteList extends React.Component {

    render() {
        return (
            <div>
            <div className="tasks">
                <h1>Task To Done List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.tasks.map(item => {
                        if(item.complete == true)
                        return <TaskCompleteItem key={item.id} task={item} {...this.props}
                            deleteTask={this.props.deleteTask} />
                    })
                }
                </div>
            </div>
                <div className="TaskButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/tasks/new")}
                            }>
                            Add Task
                            </button>
                </div>
            </div>
        )
    }
}

export default withRouter(TaskCompleteList)