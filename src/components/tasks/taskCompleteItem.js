import React, {Component} from "react";
import { Link } from "react-router-dom";

class TaskCompleteItem extends Component {

    state = {
        saveDisabled: false
    }
        
    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteTask(this.props.task.id);
    }

    handleClickDetails = (event) => {
        this.setState({
            saveDisabled: true
        })
    }

    render() {
        return (
            <div className="cardtask-card d-inline-flex col-md-2">
                <div className="card-body">
                    <div className="card-title task-item">
                    <h5>{this.props.task.body}</h5>
                    <p className="d-flex justify-content-center">
                        {this.props.task.complete}
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link className="nav-link" to={`/tasks/${this.props.task.id}`}>Details</Link>
                    </div>
                    <div>
                        <button 
                        type="button" 
                        className="btn btn-outline-primary btn-sm" 
                        onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`); 
                        }}>
                        Edit Task
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskCompleteItem