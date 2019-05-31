import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default class EventsDash extends Component {

    // arr.slice(Math.max(arr.length - 5, 1))

    render () {
        // {
        //     this.props.tasks.slice(Math.max(tasks.length - 5, 1))
        // }
        return(
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>{this.props.tasks.body}</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
            </div>
        )
    }
}