import React, { Component } from 'react'
import TaskModal from './taskModal'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import './tasks.css'

export default class TodoListItem extends Component {

  state = {
    editName: false,
    body: this.props.item.body,
    modalShow: false,
    handleClickedDeleteYes: this.handleClickedDeleteYes,
    handleClickedNo: this.handleClickedNo
  }

  onClickClose = () => {
    this.setState({
      modalShow: true
    })
  }

  onClickDone = () => {
    this.props.markTodoDone(this.props.item);
    this.setState({
      editName: false,
      body: this.state.body,
      modalShow: false
    })
  }

  updateItem = () => {
    this.props.item.body = this.state.body;
    this.props.editTask(this.props.item);
    this.setState({
      editName: false,
      body: this.state.body,
      modalShow: false
    })
  }

  changeBody = (e) => {
    this.setState({
      editName: this.state.editName, body: e.target.value, modalShow: false
    })
    if (e.keyCode === 13) {
      this.updateItem();
    }
  }

  displayConditions = () => {
    if (this.state.editName) {
      return (<div className="input-div">
        <input type="text" onKeyUp={ this.changeBody } defaultValue={ this.props.item.body } autoFocus />
        <span className="edit-check" onClick={ this.updateItem }><FaCheckCircle /></span>
      </div>)
    } else {
      return this.props.item.body
    }
  }

  onClickEdit = () => {
    this.setState({ editName: true, body: this.state.body, modalShow: false });
  }

  handleClickedDeleteYes = () => {
    this.props.removeItem(this.props.item.id);
  }

  handleClickedNo = () => {
    this.setState({ editName: this.state.editName, body: this.state.body, modalShow: false });
  }

  render () {
    let todoClass = this.props.item.complete ?
      "done" : "undone";

    let liClasses = this.props.isLastUnDone ? "list-group-item task-lastUndone" : "list-group-item";

    return (
      <section className="task-section">
        <TaskModal header={ "Delete Task?" } toggleModal={ this.state.modalShow } handleClickYes={ this.handleClickedDeleteYes } handleClickNo={ this.handleClickedNo } />
        <li className={ liClasses }>
          <div className={ todoClass }>
            <span aria-hidden="true" className="check-to-complete" onClick={ this.onClickDone }><FaCheck /></span>
            { this.displayConditions() }
            <button type="button" className="close" id="close" onClick={ this.onClickClose }><FaTrashAlt /></button>
            <button type="button" className="close" id="edit" onClick={ this.onClickEdit }><FaEdit /></button>
          </div>
        </li>
      </section>
    );
  }
}