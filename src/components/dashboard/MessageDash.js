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
        return(
            <div>
                <Card className="dash-card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle></CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
                <Card className="dash-card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
                <Card className="dash-card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
                <React.Fragment>
                    <Button className="redirect-dash-link" onClick={this.renderTaskPage} color="link">All messages</Button>
                </React.Fragment>
            </div>
        )
    }
}

export default withRouter(MessageDash)