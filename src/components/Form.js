import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.css';

const cx = classNames.bind(styles);
const Form = props => {
    const {value, onChange, onCreate, onKeyPress} = props;
    return (
        <div className={cx('form')}>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className={cx('create-button')} onClick={onCreate}>Add</div>
        </div>
    )
}

export default Form;