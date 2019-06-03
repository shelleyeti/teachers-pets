import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Dashboard.css'
import { withRouter } from 'react-router'

class MessageDash extends Component {

    // arr.slice(Math.max(arr.length - 5, 1))

    renderTaskPage = () => {
        this.props.history.push("/messages/")
    }
    render () {
        // {
        //     this.props.tasks.slice(Math.max(tasks.length - 5, 1))
        // }
        return (
            <div>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>You sent:</CardTitle>
                    <CardText>Hey kiddos ;)</CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>You sent:</CardTitle>
                    <CardText>Welcome to Papa's house</CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>adam.joor sent:</CardTitle>
                    <CardText>I hope this continues to work</CardText>
                </Card>
                <React.Fragment>
                    <Button className="redirect-dash-link" onClick={ this.renderTaskPage } color="link">All messages</Button>
                </React.Fragment>
            </div>
        )
    }
}

export default withRouter(MessageDash)