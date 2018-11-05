import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.module.css';

const cx = classNames.bind(styles);
const makeDummyHandler = (name) => {
    const msg = name ? 
        "Warning: Missing implementation of `" + name + "`." :
        "Warning: Handler is not provided."
    return ()=>console.warn(msg);
}
class TodoItem extends Component {
    static defaultProps = {
        text: '',
        checked: false,
        id: null,
        onToggle: makeDummyHandler('onToggle'),
        onRemove: makeDummyHandler('onRemove'),
    }
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className={cx('todo-item')} onClick={()=>onToggle(id)}>
                <div className={cx('remove')} onClick={(e)=>{e.stopPropagation(); onRemove(id)}}>
                    &times;
                </div>
                <div className={cx('todo-text', { checked })}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className={cx('check-mark')}>/</div>)
                }
            </div>
        )
    }
}

export default TodoItem;