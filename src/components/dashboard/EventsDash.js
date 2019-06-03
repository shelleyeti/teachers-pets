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

    render () {
        // let titleArray = []
        let reversed = this.props.events.reverse()
        // titleArray.push(reversed[0].title)
        // console.log(titleArray)
        console.log("reversed array:", reversed)

        return (
            <div>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>4020-04-20: Go to the mall with the girls</CardTitle>
                    <CardText><em>It's time get a new snake skin belt sweetie.</em></CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>2019-06-01: Sit with Addam</CardTitle>
                    <CardText><em>Yay</em></CardText>
                </Card>
                <Card className="dash-card" body inverse style={ { backgroundColor: '#333', borderColor: '#333' } }>
                    <CardTitle>2019-06-01: Game of Thrones watching party</CardTitle>
                    <CardText><em>Don't forget to bring the spiced wolf shanks you froze last winter</em></CardText>
                    {/* isMessages() ? <differentContent> :  "" */ }
                </Card>
                <React.Fragment>
                    <Button className="redirect-dash-link" onClick={ this.renderTaskPage } color="link">All events</Button>
                </React.Fragment>
            </div>
        )
    }
}
export default withRouter(EventsDash)