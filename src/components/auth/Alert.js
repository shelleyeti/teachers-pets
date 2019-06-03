import { Component } from 'react'
import { Alert } from 'reactstrap';
import React from 'react'

export default class FormAlert extends Component {
    render() {
        return(
            <React.Fragment>
                <Alert color="danger">
                Please fill out all fields.
                </Alert>
            </React.Fragment>
        )
    }
}
