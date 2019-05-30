import React, { Component } from 'react';
import TaskList from './tasksList';
import TaskCompleteList from './tasksCompleteList'
import './tasks.css'
 
export default class TaskContainerRow extends React.Component {
 render(){
    return (
        <div className='rowC'>
            <TaskList tasks={this.props.tasks} />
            <TaskCompleteList />
        </div>
    );
    }
 }