import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.module.css';

import { makeDummyHandler } from '../utils';

const cx = classNames.bind(styles);

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
                    checked && (<div className={cx('check-mark')}>&#x2713;</div>)
                }
            </div>
        )
    }
}

export default TodoItem;