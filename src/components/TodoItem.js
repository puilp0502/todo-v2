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
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, checked, urgency, id, onToggle, onRemove } = this.props;
        return (
            <div className={cx('todo-item')} onClick={()=>onToggle(id)}>
                <div className={cx('remove')} onClick={(e)=>{e.stopPropagation(); onRemove(id)}}>
                    &times;
                </div>
                <div className={cx('todo-text', { checked })}>
                    <div>{text}</div>
                </div>
                <div className={cx('todo-urgency')} data-urgency={urgency} />
                <div className={cx('check-mark')}>{ checked && '✓' }</div>

            </div>
        )
    }
}

export default TodoItem;