import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TaskItem from './tasksItem';

class TaskList extends Component {

    render() {
        return (
            <section className="Tasks">
                <div className="TaskButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/tasks/new")}
                            }>
                            Add Task
                            </button>
                </div>
                <h1>Task To Do List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.tasks.map(item => {
                        return <TaskItem key={item.id} task={item} {...this.props}
                            deleteTask={this.props.deleteTask} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(TaskList)