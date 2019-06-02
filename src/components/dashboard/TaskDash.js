import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default class TaskDash extends Component {

    // arr.slice(Math.max(arr.length - 5, 1))

    render () {

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
            </div>
        )
    }
}