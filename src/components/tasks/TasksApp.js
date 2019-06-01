import React, { Component } from 'react'
import TodoList from './todoList'
import TodoForm from './todoForm'
import './tasks.css'

/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
	- TodoForm
*/

class TodoHeader extends Component {
  render () {
    return <h1>Todo list</h1>;
  }
}

export default class TodoApp extends Component {
  state = {
    userId: "",
    body: "",
    complete: ""
  }

  addItem = (todoItem) => {
    let newItem = {
      userId: this.props.activeUser,
      body: todoItem.newItemValue,
      complete: false
    };
    this.props.addTask(newItem)
  }

  removeItem = (id) => {
    this.props.deleteTask(id);
  }

  markTodoDone = (item) => {
    item.complete = !item.complete;
    this.props.markDone(item);
  }

  editTaskItem = (item) => {
    this.props.editTask(item);
  }

  render () {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={ this.props.initItems } removeItem={ this.removeItem } editTask={ this.editTaskItem } markTodoDone={ this.markTodoDone } />
        <TodoForm addItem={ this.addItem } />
      </div>
    );
  }
}