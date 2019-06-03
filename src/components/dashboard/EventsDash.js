import React, { Component } from 'react'
import { Card, CardTitle, Button, CardText } from 'reactstrap';
import './Dashboard.css'
import { withRouter } from 'react-router'

class EventsDash extends Component {

    constructor(props) {
        super(props);
    }

    renderTaskPage = () => {
        this.props.history.push("/events/")
    }

    user = {
        activeId: this.props.activeUser.id,
    }
    // check if this was a message
    // if it was, show something different based on that boolean
    // isMessages = (generic) => {
    //     return checkIfIGotMessageContent(generic)
    // }

    render() {
        // let titleArray = []
        let reversed = this.props.events.reverse()
        // titleArray.push(reversed[0].title)
        // console.log(titleArray)
        console.log("reversed array:", reversed)

        return (
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
                    {/* isMessages() ? <differentContent> :  "" */}
                </Card>
                <React.Fragment>
                    <Button className="redirect-dash-link" onClick={this.renderTaskPage} color="link">All events</Button>
                </React.Fragment>
            </div>
        )
    }
}
export default withRouter(EventsDash)