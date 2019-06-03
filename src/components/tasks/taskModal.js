import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TaskModal extends Component {
  render () {
    return (
      <Modal isOpen={ this.props.toggleModal } toggle={ this.props.handleClickNo }>
        <ModalHeader>
          { this.props.header }
        </ModalHeader>
        <ModalBody>
          <p>
            Are you sure you want to delete this item?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={ this.props.handleClickYes }>Yes</Button>
          <Button onClick={ this.props.handleClickNo }>No</Button>
        </ModalFooter>
      </Modal>
    );
  }
}