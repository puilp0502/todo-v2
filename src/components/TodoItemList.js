import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        return (
            <div>
                <TodoItem text="say hello"/>
                <TodoItem text="say hello"/>
                <TodoItem text="say hello"/>
            </div>
        )
    }
}

export default TodoItemList;