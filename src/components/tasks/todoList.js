import React, { Component } from 'react'
import TodoListItem from './todoListItem'
import './tasks.css'


export default class TodoList extends Component {
  render () {
    let lastUndoneItemLst = this.props.items.filter((item) => {
      if (item.complete === false)
        return item;
    });

    let lastUndoneItem = lastUndoneItemLst[lastUndoneItemLst.length - 1];

    let items = this.props.items.map((item, index) => {
      let isLastUndoneItem = false;
      if (lastUndoneItem != null && item.id === lastUndoneItem.id)
        isLastUndoneItem = true;
      return (
        <TodoListItem key={ index } isLastUnDone={ isLastUndoneItem } item={ item } index={ index } editTask={ this.props.editTask } removeItem={ this.props.removeItem } markTodoDone={ this.props.markTodoDone } />
      );
    });
    return (
      <ul className="list-group"> { items } </ul>
    );
  }
}