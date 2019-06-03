import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { withRouter } from 'react-router'
import './Dashboard.css'


class TaskDash extends Component {

    constructor(props) {
        super(props);
    }
    renderTaskPage = () => {
        this.props.history.push("/tasks/")
    }

    // arr.slice(Math.max(arr.length - 5, 1))

    render () {
        return (
            <div>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>Build the sister wife compound</CardTitle>
                    <CardText><em>Incomplete</em></CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>Adopt Eliot</CardTitle>
                    <CardText><em>Incomplete</em></CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>eat peanut butter</CardTitle>
                    <CardText><em>Complete</em></CardText>
                </Card>
                <React.Fragment>
                    <Button className="redirect-dash-link" onClick={ this.renderTaskPage } color="link">All tasks</Button>
                </React.Fragment>
            </div>
        )
    }
}
export default withRouter(TaskDash)