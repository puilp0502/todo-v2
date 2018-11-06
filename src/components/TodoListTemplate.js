import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoListTemplate.module.css';

import PriorityPicker from './PriorityPicker';

const cx = classNames.bind(styles);
const TodoListTemplate = ({ form, children }) => {
    return (
        <main className={cx('template')}>
            <div className={cx('title')}>
                Todos
            </div>
            <div className={cx('priority-picker')}>
                <PriorityPicker />
            </div>
            <section className={cx('form-wrapper')}>
                { form }
            </section>
            <section className={cx('todos-wrapper')}>
                { children }
            </section>
        </main>
    )
}

export default TodoListTemplate;