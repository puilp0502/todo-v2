import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { makeDummyHandler } from '../utils';

class TodoItemList extends Component {
    static defaultProps = {
        todos: [],
        onToggle: makeDummyHandler('onToggle'),
        onRemove: makeDummyHandler('onRemove')
    }
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoitems = todos.map(({id, text, checked}) => (
            <TodoItem key={id} id={id} text={text} checked={checked}
                onToggle={onToggle} onRemove={onRemove}/>))
        return (
            <div>
                {todoitems}
            </div>
        )
    }
}

export default TodoItemList;