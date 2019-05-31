import React from 'react';
import TaskModal from './taskModal'
import './tasks.css'
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';


/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/


class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} editTask={this.props.editTask} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        // ,
        // <TodoEditForm />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
  
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.handleClickedDeleteYes = this.handleClickedDeleteYes.bind(this);
    this.handleClickedNo = this.handleClickedNo.bind(this);
  }

  state = {
    editName: false,
    body: this.props.item.body,
    modalShow: false,
    handleClickedDeleteYes: this.handleClickedDeleteYes,
    handleClickedNo: this.handleClickedNo
  }

  onClickClose() {
    this.setState({
      modalShow: true
    })
  }

  onClickDone() {
    this.props.markTodoDone(this.props.item);
  }

  updateItem(){
    this.props.item.body = this.state.body;
    this.props.editTask(this.props.item);
    this.setState({
      editName: false,
      body: this.state.body,
      modalShow: false
    })
  }

  changeBody(e){
    this.setState({editName: this.state.editName, body: e.target.value, modalShow: false
    })

    if(e.keyCode === 13){
        this.updateItem();
    }
  }

  onClickEdit(){
    this.setState({ editName: true, body: this.state.body, modalShow: false });
  }

  handleClickedDeleteYes(){
    this.props.removeItem(this.props.item.id);
  }

  handleClickedNo(){
    this.setState({ editName: this.state.editName, body: this.state.body, modalShow: false });
  }

  render () {
    var todoClass = this.props.item.complete ? 
        "done" : "undone";
    return(
      <section>
      <TaskModal header={"Delete Task?"} toggleModal={this.state.modalShow} handleClickYes={this.handleClickedDeleteYes} handleClickNo={this.handleClickedNo}/>
                
      <li className="list-group-item ">
        <div className={todoClass}>
          <span aria-hidden="true" onClick={this.onClickDone}><FaCheck/></span>
          { (this.state.editName ? (<div className="input-div"><input type="text" onKeyUp={this.changeBody} defaultValue={this.props.item.body} /> 
           <button className="editTaskItem" onClick={this.updateItem}><FaCheckCircle/></button></div>)
           : this.props.item.body )}
          <button type="button" className="close" id="close" onClick={this.onClickClose}><FaTimes/></button>
          <button type="button" className="close" id="edit" onClick={this.onClickEdit}><FaEdit/></button>
        </div>
      </li> 
      </section>    
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline form-todo-container">
        <div className="input-form-todo">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
          <button type="submit" className="btn btn-default"><FaPlus/></button>
        </div> 
      </form>
    );   
  }
}
  
class TodoHeader extends React.Component {
  render () {
    return <h1>Todo list</h1>;
  }
}

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.editTaskItem = this.editTaskItem.bind(this);
  }
  addItem(todoItem) {
    let newItem = {
      userId: 1,
      body:  todoItem.newItemValue,
      complete: false
    };

    this.props.addTask(newItem)
  }
  removeItem (id) {
    this.props.deleteTask(id);
  }
  markTodoDone(item) {
    item.complete = !item.complete;
    this.props.markDone(item);  
  }

  editTaskItem(item){
    this.props.editTask(item);
  }

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} editTask={this.editTaskItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}