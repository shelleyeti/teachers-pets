import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TaskItem from './tasksItem';

class TaskList extends Component {

    render() {
        return (
            <div>
            <div className="tasks">
                <h1>Task To Do List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.tasks.map(item => {
                        if(item.complete == false)
                        return <TaskItem key={item.id} task={item} {...this.props}
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

export default withRouter(TaskList)