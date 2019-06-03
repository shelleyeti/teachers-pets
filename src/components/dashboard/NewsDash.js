import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Dashboard.css'
import { withRouter } from 'react-router'

class NewsDash extends Component {

    // arr.slice(Math.max(arr.length - 5, 1))

    renderTaskPage = () => {
        this.props.history.push("/news/")
    }
    render () {
        // {
        //     this.props.tasks.slice(Math.max(tasks.length - 5, 1))
        // }
        return (
            <div>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>Stay On Brand</CardTitle>
                    <CardText><em>"If you're not on brand are you even really living? The answer is exactly what you'd expect: No."</em></CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>Dolly Parton Out of This World</CardTitle>
                    <CardText><em>"Dolly Parton revealed in interview Monday morning to be an actual alien. She's only visiting, folks, we thought she was an angel, but she's just from a different place in the sky."</em></CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>Berto Wins Olympics</CardTitle>
                    <CardText>"First Black Pug to win in human olympics. 7 gold medals!!"</CardText>
                </Card>
                <React.Fragment>
                    <Button className="redirect-dash-link" onClick={ this.renderTaskPage } color="link">All news</Button>
                </React.Fragment>
            </div>
        )
    }
}
export default withRouter(NewsDash)