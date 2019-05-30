import React, { Component } from 'react';
import './tasks.css'
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

// var octicons = require("octicons")
// octicons.alert

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
var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
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
  }
  onClickClose() {
    var id = parseInt(this.props.item.id);
    this.props.removeItem(id);
  }
  onClickDone() {
    this.props.markTodoDone(this.props.item);
  }
  onClickEdit() {

  }
  render () {
    var todoClass = this.props.item.complete ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}><FaCheck/></span>
          {this.props.item.body}
          <button type="button" className="close" onClick={this.onClickEdit}><FaEdit/></button>
          <button type="button" className="close" onClick={this.onClickClose}><FaTimes/></button>
        </div>
      </li>     
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
          <button type="submit" className="btn btn-default">Add</button>
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
    this.state = {todoItems: todoItems};
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
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}